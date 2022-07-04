import fetch from "node-fetch";

export const home = async (req, res) => {
    const to = "KRW";
    const from = "EUR";
    const amount = 5;
    const rate = await (
        await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
            method: "GET",
            headers: {
                apiKey: process.env.FIXER_API_KEY,
            },
        })
    ).json();

    return res.render("home", { result: rate.result });
};
