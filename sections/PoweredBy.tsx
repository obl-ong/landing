import { Flex } from "theme-ui";
import Link from "next/link";

export default function PoweredBy() {
    return (
        <Flex sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "3rem"
        }}>
            <Link href="https://vercel.com?utm_source=oblong&utm_campaign=oss">
                <img src="/img/powered-by-vercel.svg" alt="Powered by Vercel" />
            </Link>
        </Flex>
    )
}