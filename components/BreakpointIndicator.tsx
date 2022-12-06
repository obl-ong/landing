import { Box } from "theme-ui";

export default function BreakpointIndicator() {
    return (
        <Box sx={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            width: "1rem",
            height: "1rem",
            border: "1px solid",
            borderColor: "black",
            borderRadius: "50%",
            backgroundColor: ["red", "blue", "green", "purple", "pink"]
        }} />
    )
}