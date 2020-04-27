#!/bin/bash

check=`ps -ef | grep "yabai" | grep -v "grep" | wc -l | cut -d " " -f8`

if [ $check -ge 1 ]; then
  echo "$(/usr/local/bin/yabai -m query --displays)||$(/usr/local/bin/yabai -m query --spaces)"
else
  echo -n ""
fi
