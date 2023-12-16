#!/bin/sh
echo -e "\033[1;36m-----------------------------------"
echo -e "| Deploying the latest release... |"
echo -e "-----------------------------------\033[0m\n"

set -e

echo -e "=== Start backup existing files... ===\n"
DIR_PATH_BASE="<add_base_folder_here>"
BACKUP_FOLDER="$DIR_PATH_BASE/backup/backup_$(date +%Y-%m-%d_%H-%M)"
mkdir -p "$BACKUP_FOLDER"
if cp -r "$DIR_PATH_BASE/<folder>/" "$BACKUP_FOLDER"; then
    echo -e "\033[32m✓ Backup completed\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: backup failed.\033[0m\n"
fi

echo -e "=== Start cloning github repo... ===\n"
GITHUB_REPO_URL="<git_repo_url>"
NEW_RELEASE_FOLDER="$DIR_PATH_BASE/new_release"

git clone "$GITHUB_REPO_URL" "$NEW_RELEASE_FOLDER"

echo -e "=== Starting npm install... ===\n"
cd "$NEW_RELEASE_FOLDER"

[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"
nvm use 12

npm install
npm run build

echo -e "=== Start removing existing webapp files... ===\n"
if rm -rf "$DIR_PATH_BASE/build"/*; then
    echo -e "\033[32m✓ Existing files deleted\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while deleting existing files.\033[0m\n"
fi

echo -e "=== Start copying build files to final destination... ===\n"
if cp -r $NEW_RELEASE_FOLDER/build/* "$DIR_PATH_BASE/build"; then
    echo -e "\033[32m✓ Files copied to final destination folder\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while copying files to final destination folder.\033[0m\n"
fi

echo -e "=== Starting clean up... ===\n"
if rm -rf $NEW_RELEASE_FOLDER; then
    echo -e "\033[32m✓ Temporary folder cleaned up.\033[0m\n"
else
    echo -e "\033[1;31m✗ Error: Error while cleaning up temporary folder.\033[0m\n"
fi

nvm use default
echo -e "\033[1;32m---------------------------------------"
echo -e "| ✓ New release deployed succesfully! |"
echo -e "---------------------------------------\033[0m\n"