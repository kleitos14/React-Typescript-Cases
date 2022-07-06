type GreetProps = {
    name: string
    messageCount?: number
    isLogedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLogedIn ?
                <h2>
                    Welcome {props.name}! You have {messageCount} unread messages.
                </h2>
                :
                <h2>
                    Welcome Guest
                </h2>
            }
        </div>
    )
}