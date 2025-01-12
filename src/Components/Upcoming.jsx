

const Upcoming = () => {
    return (
        <div>
            <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container mx-auto">
                    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-400 dark:text-violet-600">UpComing</span>
                    <h2 className="text-5xl font-bold text-center text-gray-50 dark:text-gray-900">The Bed shit,comfort and Discount card are comming...</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-50">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">1</div>
                            <p className="text-2xl font-semibold">
                                <b>Bed Shit: </b>We will provide comfortable and resonable bed shit
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-50">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">2</div>
                            <p className="text-2xl font-semibold">
                                <b>Comfort: </b>How are missig a cool sleep they are luck we launch luxury comft that are suitable for all season 
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-50">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">3</div>
                            <p className="text-2xl font-semibold">
                                <b>Card: </b>If buy is comming why card is not we will provide big discount by Mimo card
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Upcoming;