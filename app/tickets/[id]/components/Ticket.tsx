"use client"

type TicketProps = {
    className?: string;
    ticket: any
}

export default function Ticket({ className, ticket, ...rest}: TicketProps) {
    return (
        <article className={`py-7 space-y-12 text-sm font-semibold text-black bg-white rounded-2xl select-none pointer-events-none relative ${className ? className : ""}`} {...rest}>
            <div className="px-7 space-y-8 *:grid *:grid-cols-2 *:gap-3 *:*:*:first:!text-grey-dark *:*:*:first:mb-1">
                <div>
                    <h3 className="!text-base col-span-2">
                        {ticket.movie_title}
                    </h3>
                    <p className="!text-xs !text-[#F14763] absolute top-2 right-4">
                        E-Ticket
                    </p>
                </div>

                <div>
                    <div>
                        <p>Date</p>
                        <p>{ticket.date.replaceAll("-", "/")}</p>
                    </div>
                    <div>
                        <p>Seats</p>
                        <p>{ticket.seats.join(", ")}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Location</p>
                        <p>{ticket.cinema}</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p>{ticket.time}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Payment</p>
                        <p>Successfull</p>
                    </div>
                    <div>
                        <p>Order</p>
                        <p>{ticket.id}</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center relative">
                <div className="size-10 bg-bg rounded-full absolute -left-5"></div>
                <hr className="w-full border-2 border-dashed" />
                <div className="size-10 bg-bg rounded-full absolute -right-5"></div>
            </div>

            <figure className="px-7">
                <img src="/barcode.svg" alt="" />
            </figure>
        </article>
    )
}