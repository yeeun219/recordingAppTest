'use client'

import { useState } from "react";

export default function ClientComponent() {
    const [client, setClient] =useState(true);
    return(
        <button onClick={setClient(false)}>자식 client 버튼</button>
    )
}