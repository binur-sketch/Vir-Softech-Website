$html = Get-Content 'pe.html' -Raw
$html -replace '<[^>]+>',' ' -replace '\s+',' ' | Out-File pe.txt
$html2 = Get-Content 'da.html' -Raw
$html2 -replace '<[^>]+>',' ' -replace '\s+',' ' | Out-File da.txt
