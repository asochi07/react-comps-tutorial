import Button from "../components/Button";

function ButtonPage() {

    
    return <div>
        
        <div>
            <Button primary className="mb-4">Primary</Button>
        </div>
        <div>
            <Button secondary outline>Secondary</Button>
        </div>
        <div>
            <Button success>Success</Button>
        </div>
        <div>
            <Button warning rounded>Warning</Button>
        </div>
        <div>
            <Button danger outline>Danger</Button>
        </div>
        <div>
            <Button rounded outline primary>Outline</Button>
        </div>
        <div>
            <Button  primary>Rounded</Button>
        </div>
    </div>
}

export default ButtonPage;