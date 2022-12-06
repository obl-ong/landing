import { Badge, Box, Button, Container, Input, Label } from "theme-ui";
import DonateForm from "../components/DonateForm";
import Donate from "../sections/Donate";
import TextCycle from "../text-cycle/TextCycle";

export default function components() {
    return (
        <>
            <Container>
                <Label>Testing</Label>
                <Input placeholder="Placeholder" />
                <Button variant="whiteMd">Button</Button>
                <Box sx={{ display: "flex", width: "300px", p: "1rem", alignItems: "stretch", "& > *": { width: "100%" }, gap: "0.5rem", flexDirection: "column" }}>
                    <Button variant="whiteMd">Continue</Button>
                    <Button variant="blueMd">Continue</Button>
                    <Button variant="yellowMd">Continue</Button>
                    <Button variant="pinkMd">Continue</Button>
                </Box>
                {/*<Box>
                    <Badge variant="white">Testing</Badge>
                    <Badge variant="blue">Testing</Badge>
                    <Badge variant="yellow">Testing</Badge>
                    <Badge variant="pink">Testing</Badge>
                </Box>*/}
                <DonateForm />
                <TextCycle items={["Hello", "world", "testing"]} duration={3000} />
            </Container>
            <Donate />
        </>
    )
}