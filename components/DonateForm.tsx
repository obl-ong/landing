import { Box, Button, Flex, Input, Label, Radio, Text } from "theme-ui";
import { useState } from "react";
import Image from "next/image";
import stripe from "../public/img/stripe.svg";
import { motion } from "framer-motion"

let MotionButton = motion(Button);
let MotionInput = motion(Input);

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
                <MotionInput initial={{ scale: 1, filter: "none" }} whileFocus={{ scale: 1.05, filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.5))" }} required id="donate-name" name="name" placeholder="Fiona Oblong" />
            </Box>
            <Box>
                <Label htmlFor="donate-email">Your email</Label>
                <MotionInput initial={{ scale: 1, filter: "none" }} whileFocus={{ scale: 1.05, filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.5))" }} required id="donate-email" name="email" placeholder="fionao@gmail.com" />	
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
                	<MotionInput initial={{ scale: 1, filter: "none" }} whileFocus={{ scale: 1.05, filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.5))" }} type="number" placeholder="Custom" value={customAmount} sx={{
                            backgroundColor: amount === CUSTOM ? "yellow" : "white",
                            paddingLeft: customAmount === "" ? "1rem" : "1.5rem",
                            height: "100%"
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
            <MotionButton type="submit" variant="whiteMd" sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                lineHeight: "100%"
            }} whileHover={{
                y: -5,
    		transition: { duration: 0.25 },
  	      }} whileTap={{ scale: 0.9, transition: { duration: 0.25 } }}>
                {"Continue with "}<Image src={stripe} alt="Stripe" height={28} />{" →"}
            </MotionButton>
        </Flex>
    );
}
