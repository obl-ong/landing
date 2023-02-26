import SlantedSection from "../components/SlantedSection";
import { Text, Flex, Paragraph, Grid, Box } from "theme-ui";
import Card from "../components/Card";

export default function Vision() {
    return (
        <Card first heading="Identity should be free." chip="Our vision">
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.5rem",
                gap: "1rem"
            }}>
                <Paragraph>
                    We think everyone should have access to a high-quality domain name that reflects their identity.
                </Paragraph>
                <Paragraph>
                    Unfortunately, most “free domain” services are clunky, too specific, or associated with spam.
                </Paragraph>
                <Paragraph>
                    We aim to fix this by <Text sx={{
                        fontWeight: "700",
                }}>providing <Text color="pink">generic</Text>, <Text color="pink">memorable</Text>, and <Text color="pink">fun</Text> subdomains at <Text sx={{
                    // underline
                    textDecoration: "underline"
                }}>no cost</Text> to all.</Text>
                </Paragraph>
            </Box>
        </Card>
    )
}
