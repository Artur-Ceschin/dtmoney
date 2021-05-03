import { Sumary } from "../Sumary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./style";


export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransactionTable />
        </Container>
    )
}