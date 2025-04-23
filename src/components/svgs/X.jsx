const XSvg = (props) => (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="200" fill="white" rx="20" ry="20"/>
        <text x="130" y="60" fontFamily="Arial" fontSize="60" fill="black" fontWeight="bold">B</text>
    </svg>
);

export default XSvg;
