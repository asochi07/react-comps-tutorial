import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'ysdhdh',
            label: 'What is React',
            content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components'
        },
        {
            id: 'hffjdf',
            label: 'What is React language used for?',
            content: 'React JS is a JavaScript library used for building user interfaces (UIs) for single-page applications'
        },
        {
            id: 'fjfhd',
            label: 'Is React easy to learn?',
            content: 'Thankfully, React is easy to learn, but only once you have foundational knowledge in JavaScript.'
        }
    ];


    return <div>
        <Accordion items={items} />
    </div>
}

export default AccordionPage;