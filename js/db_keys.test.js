// for test site

var manifestTable = {
    tableName: "test-tx-manifest",
    region: "us-west-2",
    readonly: "AKIAINUPRVAKZMNMGJSA",
    access: "Hv9UudcvgEAP7X13kZFqR6J14vPyC3YScDVndv0W"
};

function getManifestTable() {
    AWS.config.update({
        region: manifestTable.region,
        accessKeyId: manifestTable.readonly,
        secretAccessKey: manifestTable.access
    });

    return manifestTable.tableName;
}

var webHookS3_Bucket = {
    s3Name: "test-tx-webhook-client",
    region: "us-west-2",
    readonly: "AKIAJMZHD6MB3CP3U5YA",
    access: "Hv9UudcvgEAP7X13kZFqR6J14vPyC3YScDVndv0W"
};

function getWebHookBucket() {
    var s3Bucket = new AWS.S3({
        apiVersion: '2006-03-01',
        accessKeyId: webHookS3_Bucket.readonly,
        secretAccessKey: webHookS3_Bucket.access,
        region: webHookS3_Bucket.region,
        params: {Bucket: webHookS3_Bucket.s3Name}
    });

    return s3Bucket;
}
