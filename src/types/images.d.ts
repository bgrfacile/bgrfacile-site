declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const value: string;
    export default value;
}