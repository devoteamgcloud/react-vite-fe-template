type HookComponent = {
    title: string,
    description?: string
    usage?: string // Code example
    components: React.ReactNode | "custom"
    callback?: CallableFunction
}
export const componentSections: HookComponent[] = [
    {
        title: 'useTheme()',
        description: "Gets current active theme, and change theme.",
        usage: `
const { theme, toggleTheme } = useTheme();\n
const toggle = () => {\n
    if (toggleTheme) {
        toggleTheme()
    }
}
return <Switch onChange={callback} variant={"round"} text="Dark mode" />
        `,
        components: "custom"
    }
]
