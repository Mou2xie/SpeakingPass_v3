
export default async function PartOneDetail({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;
    return (
        <>
            <h1 className=" text-center text-3xl font-(family-name:--font-breeSerif)">{category}</h1>
        </>
    );

}