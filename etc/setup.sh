#!/bin/bash

if type mise > /dev/null; then
  echo "mise already installed and in PATH."
  exit 0
fi

if type brew > /dev/null; then
  brew install mise
elif type pacman > /dev/null; then
  sudo pacman -Sy mise
elif type apt > /dev/null; then
  sudo bash -c 'apt update && apt install -y mise'
elif type dnf > /dev/null; then
  sudo bash -c 'dnf copr enable jdxcode/mise && dnf install mise'
else
  echo "Don't know how to manage packages on this system. Please install mise-en-place manually."
  exit 0
fi
