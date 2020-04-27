IFS='|' read -r status theArtist theName <<<"$(osascript <<<'tell application "Spotify"
  set status to player state
  set theTrack to current track
  set theArtist to artist of theTrack
  set theName to name of theTrack
  return theArtist & "|" & theName & "|" & status
end tell')"
echo "$status||$theArtist||$theName"


#echo "$(osascript -e <<<'tell application "Spotify"
#  set status to player state
#  set theTrack to current track
#  set theArtist to artist of theTrack
#  set theName to name of theTrack
#  return { status, theArtist, theName }
#end tell')"
