function readFile(file) {
    return new Promise((a, b) => {
        var reader = new FileReader();
        reader.onload = function (e) {
            var workbook = XLSX.read(e.target.result);
            var allData = {}
            for (var i in workbook.Sheets) {
                console.log(XLSX.utils.sheet_to_html(workbook.Sheets[i]));
                allData[i] = XLSX.utils.sheet_to_json(workbook.Sheets[i]);

            }
            a(allData);
        };
        reader.readAsArrayBuffer(file);
    })

}