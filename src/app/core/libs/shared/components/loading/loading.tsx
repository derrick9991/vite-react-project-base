export default function LoadingComponent({ style }: { style?: React.CSSProperties }) {
    return (
        <div className="loading-spinner" style={style}>
            <div className="spinner"></div>
        </div>
    );
}
