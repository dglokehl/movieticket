import PageWrapper from "@/components/PageWrapper"
import Button from "@/components/Button";


export const metadata = {
    title: "Checkout",
}


export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <PageWrapper
            className=""
            header={{ title: metadata.title }}
        >
            <Button href={`/movies/${id}/checkout`} className="mt-7 flex justify-evenly items-center">
                <p className="px-6">Pay Now</p>
                <p>|</p>
                <p>$99.9</p>
            </Button>
        </PageWrapper>
    )
}