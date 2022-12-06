import { Box, Button, Flex, Input, Label, Radio, Text } from "theme-ui";
import { useState } from "react";

const presets = [5, 10, 25];
const CUSTOM = Symbol();

export default function DonateForm() {
    const [amount, setAmount] = useState<number | typeof CUSTOM>(1);
    const [customAmount, setCustomAmount] = useState("");

    return (
        <Flex
            as="form"
            bg="pink"
            color="white"
            sx={{
                flexDirection: "column",
                padding: "1rem",
                gap: "1rem",
                borderRadius: "1rem",
                width: "400px"
            }}
            //@ts-expect-error
            action="/api/donate"
            method="GET"
            target="_blank"
        >
            <Box>
                <Label htmlFor="donate-name">Your name</Label>
                <Input required id="donate-name" name="name" placeholder="Fiona Oblong" />
            </Box>
            <Box>
                <Label htmlFor="donate-email">Your email</Label>
                <Input required id="donate-email" name="email" placeholder="fionao@gmail.com" />
            </Box>
            <Box>
                <Label htmlFor="donate-amount">Donation amount</Label>
                <input type="hidden" id="donate-amount" name="amount" value={
                    amount === CUSTOM ? customAmount : presets[amount]
                } />
                <Flex sx={{
                    flexDirection: "row",
                    gap: "0.625rem"
                }}>
                    {presets.map((preset, i) => (
                        <Button
                            key={preset}
                            variant={amount === i ? "yellowMd" : "whiteMd"}
                            aria-checked={amount === i}
                            role="radio"
                            onClick={() => setAmount(i)}
                            sx={{
                                minWidth: `${75/16}rem`
                            }}
                            type="button"
                        >
                            {`$${preset}`}
                        </Button>
                    ))}
                    <Box sx={{
                        position: "relative",
                        // dollar sign
                        "&::before": customAmount === "" ? {} : {
                            content: '"$"',
                            position: "absolute",
                            left: "1rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "black"
                        }
                    }}>
                        <Input type="number" placeholder="Custom" value={customAmount} sx={{
                            backgroundColor: amount === CUSTOM ? "yellow" : "white",
                            paddingLeft: customAmount === "" ? "1rem" : "1.5rem"
                        }} onClick={() => customAmount !== "" && setAmount(CUSTOM)} onChange={e => {
                            setCustomAmount(e.target.value);
                            if(e.target.value == "") setAmount(1);
                            else setAmount(CUSTOM);
                        }} />
                    </Box>
                </Flex>
            </Box>
            <Text sx={{
                color: "yellow",
                fontSize: "1rem",
                lineHeight: "100%"
            }}>
                Your contribution is tax-deductible; you’ll be emailed with a receipt.
            </Text>
            <Button type="submit" variant="whiteMd" sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                lineHeight: "100%"
            }}>
                {"Continue with "}<img sx={{
                    height: "1.75rem"
                }} src="img/stripe.svg" alt="Stripe" />{" →"}
            </Button>
        </Flex>
    );
}