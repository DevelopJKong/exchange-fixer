import got from "got";
import { Workbook } from "exceljs";

const comma = (number) => {

    number
};

export const home = async (req, res) => {
    return res.render("home");
};

export const fromToConverter = async (req, res) => {
    const to = "KRW";
    const from = "USD";
    const amount = 5;
    const { body } = await got.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    const data = JSON.parse(body);

    return res.render("convert", { result: data });
};

export const excelDownload = async (req, res) => {
    const fruits = [
        {
            name: "오렌지",
            price: "10000",
            calorie: 85.8,
        },
        {
            name: "딸기",
            price: "6000",
            calorie: 54.8,
        },
        {
            name: "포도",
            price: "4600",
            calorie: 90.8,
        },
    ];

    
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet("");
    const excelData = [];
    for (const fruit of fruits) {
        const { name, price, calorie } = fruit;
        comma(price);
        excelData.push([name, price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), `${calorie}kcal`]);
    }
    

    sheet.mergeCells("A1:C1");
    sheet.getCell("A1").value = "과일리스트";
    sheet.getCell("A1").font = { size: 14, bold: true };
    sheet.getCell("A1").alignment = { horizontal: "center" };
    sheet.getCell("A1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFF00" },
        bgColor: { argb: "FF0000FF" },
    };
    sheet.getRow(2).values = ['과일이름', '가격', '칼로리(kcal)'];

    // 엑셀 리스트 삽입
    sheet.addRows(excelData);
    //helper.excelSizeing(sheet);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader('Content-Disposition', `attachment; filename="filename.xlsx"`);
    await workbook.xlsx.write(res);
    return res.end();
};
