$pe = Get-Content 'pe.txt' -Raw
$pe.Substring([math]::Min(3900, $pe.Length), [math]::Min(4000, $pe.Length - [math]::Min(3900, $pe.Length)))

$da = Get-Content 'da.txt' -Raw
$da.Substring([math]::Min(3900, $da.Length), [math]::Min(4000, $da.Length - [math]::Min(3900, $da.Length)))
