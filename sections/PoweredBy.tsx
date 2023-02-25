import { Flex } from "theme-ui";
import Link from "next/link";
import Image from "next/image";
import poweredBy from "../public/img/powered-by-vercel.svg";

export default function PoweredBy() {
    return (
        <Flex sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem"
        }}>
            <Link href="https://vercel.com?utm_source=oblong&utm_campaign=oss">
                <Image src={poweredBy} alt="Powered by Vercel" />
            </Link>
        </Flex>
    )
}