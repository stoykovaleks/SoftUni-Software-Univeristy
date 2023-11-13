function requestValidator(obj) {

    const { method, uri, version, message } = obj;
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const regexUri = /^([\w.]+$|^\*$)/;
    const errorMessage = (typeOfParam) => `Invalid request header: Invalid ${typeOfParam}`;

    if (!validMethods.includes(method) || !method) {
        throw new Error(errorMessage("Method"));
    }
    if (!validVersions.includes(version) || !version) {
        throw new Error(errorMessage("Version"));
    }
    if (!regexUri.exec(uri) || !uri) {
        throw new Error(errorMessage("URI"));
    }
    return obj
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
)