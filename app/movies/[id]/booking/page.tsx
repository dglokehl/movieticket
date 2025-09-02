import { cinemas } from "@/data/cinemasData";

import PageWrapper from "@/components/PageWrapper"
import Button from "@/components/Button";
import SeatLayout from "./components/SeatLayout";
import BookingSelect from "./components/BookingSelect";


export const metadata = {
    title: "Select Seats",
}


export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <PageWrapper
            className=""
            header={{ title: metadata.title }}
        >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <BookingSelect obj={{ label: "Cinema", name: "cinema" }} className="col-span-2">
                    {cinemas.map((cinema) => (
                        <option value={cinema.name} key={cinema.id}>
                            {cinema.name}
                        </option>
                    ))}
                </BookingSelect>

                <BookingSelect obj={{ label: "Date", name: "date" }}>
                    <option value="25-10-01">
                        25-10-01
                    </option>
                    <option value="25-10-02">
                        25-10-02
                    </option>
                    <option value="25-10-03">
                        25-10-03
                    </option>
                </BookingSelect>

                <BookingSelect obj={{ label: "Time", name: "time" }}>
                    <option value="12:00">
                        12:00
                    </option>
                    <option value="14:00">
                        14:00
                    </option>
                    <option value="16:00">
                        16:00
                    </option>
                </BookingSelect>
            </div>

            <SeatLayout className="mt-10" />


            <Button href={`/movies/${id}/checkout`} className="mt-7">
                Checkout
            </Button>
        </PageWrapper>
    )
}