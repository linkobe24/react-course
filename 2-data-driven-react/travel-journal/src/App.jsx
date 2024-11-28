import Header from './components/Header'
import Entry from './components/Entry'

import journalData from './assets/data'

export default function App() {
    const entryComponents = journalData.map((data) => {
        return (
            <Entry
                key={data.id}
                {...data}
            />
        )
    })

    return (
        <>
            <Header />
            {entryComponents}
        </>
    )
}
