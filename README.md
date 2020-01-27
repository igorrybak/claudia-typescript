# claudia-typescript

This is a template project for using AWS with Claudia, including claudia-api-builder. Also there is possibility to launch Lambda function locally for faster debug (see package.json).

First of all you have to setting up your credentials for AWS account. For example, you can specify Key Id and Secret Access Key inside file: ~/.aws (on Linux machine). [Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

Second you need to specify your AWS account number in package.json.

Then you can create your Lambda function by running `npm run create`.
Update your function with `npm run update` command.
