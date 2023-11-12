import { Box, Container, Grid, Heading, Link, Text } from "theme-ui";
import DonateForm from "../components/DonateForm";
import { motion } from "framer-motion"

let MotionContainer = motion(Container);

export default function Donate() {
    return (
        <MotionContainer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} sx={{
            marginY: "4rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem"
        }} id="donate">
            <Heading sx={{
                textAlign: "center"
            }} variant="sectionHeading">Help keep us sustainable</Heading>
            <Grid columns={[null, 1, 2]} gap="1.375rem">
                <Box>
                    <Text sx={{
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        lineHeight: "120%"
                    }}>
                        We can only stay afloat thanks to <Text color="pink" sx={{ fontWeight: 700 }}>everyday people like you</Text> who like what we’re doing and want to help out. All donations are <Text color="blue">tax-deductible</Text> and our financials are <Link href="https://hcb.hackclub.com/oblong" color="yellow" sx={{ fontWeight: 700, textDecorationLine: "underline" }}>fully transparent</Link> (down to the individual transaction!)
                    </Text>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <DonateForm />
                </Box>
            </Grid>
        </MotionContainer>
    )
}
