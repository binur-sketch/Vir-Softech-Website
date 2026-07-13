$pe = Get-Content 'pe.txt' -Raw
$pe.Substring(0, [math]::Min($pe.Length, 4000))

$da = Get-Content 'da.txt' -Raw
$da.Substring(0, [math]::Min($da.Length, 4000))
