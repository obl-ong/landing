import SlantedSection from "../components/SlantedSection";
import { Text, Flex, Paragraph, Grid, Box } from "theme-ui";

export default function Vision() {
    return (
        <SlantedSection first heading="Identity should be free." chip="Our vision">
            <Grid columns={[null, 1, 2]} gap="1.375rem">
                <Paragraph sx={{
                    fontSize: "1.5rem"
                }}>
                    We think everyone should have access to a high-quality domain name that reflects their identity.
                    <br/>
                    Unfortunately, most “free domain” services are clunky, too specific, or associated with spam.
                    <br/>
                    We aim to fix this divide by providing generic, memorable, and fun subdomains at no cost to all.
                    {/*
                Unfortunately, on today’s internet, it’s gated behind a paywall of pricey domains and ICANN, which disproportionately harms people who are already disadvantaged in many other ways.

                Many other “free domain” services are clunky, lack generality, or are associated with spam, reducing the reach of your work compared to that of someone with more financial resources.

                We aim to fix this divide by providing generic, memorable, and fun subdomains at no cost to people who need them.*/}
                </Paragraph>
            </Grid>
            <Box bg="gray" />
        </SlantedSection>
    )
}