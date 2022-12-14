import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, name, amount } = req.query;
    if(!email || !name || !amount || typeof email !== "string" || typeof name !== "string" || typeof amount !== "string") {
        res.status(400).send("Bad Request");
        return;
    }
    const bankPage = await fetch("https://bank.hackclub.com/donations/start/oblong").then(r => r.text());
    // const csrfToken = bankPage.match(/name="csrf-token" content="(.*)"/)?.[1];
    const authenticityToken = bankPage.match(/name="authenticity_token" value="(.*)"/)?.at(-1);
    if(!authenticityToken) {
        if(!bankPage) return res.status(500).send("Could not get Hack Club Bank page");
        return;
    }
    const donation = await fetch("https://bank.hackclub.com/donations/start/oblong", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "authenticity_token": authenticityToken,
            "donation[subtitle]": "",
            "donation[name]": name,
            "donation[email]": email,
            "donation[amount]": amount,
            "commit": "Continue+→"
        }).toString()
    });
    if(donation.redirected) {
        res.redirect(donation.url);
        return;
    }
    res.status(500).send("Could not get donation URL");
};