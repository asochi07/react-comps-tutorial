import Button from '../components/Button';
import UseCounter from "../hooks/use-counter";

function CounterPage({initialCount}){
 const {count, increment} = UseCounter(initialCount)

    return <div>
        <h3>The count is  {count}</h3>
        <Button onClick={increment}>
            Increment
        </Button>
    </div>
}

export default CounterPage;