const nodemailer = require("nodemailer");
import { OAuth2Client } from "google-auth-library";

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const CLIENT_ID = `${process.env.MAIL_CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.MAIL_CLIENT_SECRET}`;
const REFRESH_TOKEN = `${process.env.MAIL_REFRESH_TOKEN}`;
const SENDER_MAIL = `${process.env.SENDER_EMAIL_ADDRESS}`;

// send mail
const sendEmail = async (to: string, url: string, txt: string) => {
  const oAuth2Client = new OAuth2Client(
    CLIENT_ID,
    CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const access_token = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_MAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        access_token,
      },
    });

    const mailOptions = {
      from: SENDER_MAIL,
      to: to,
      subject: "Blog Donna",
      html: `
              <head>
                <style media="all" type="text/css">
                  @media only screen and (max-width: 480px) {
                    table[class='body'] h1 {
                      font-size: 24px !important;
                    }
                    table[class='body'] h2 {
                      font-size: 20px !important;
                    }
                    table[class='body'] h3 {
                      font-size: 14px !important;
                    }
                    table[class='body'] .content,
                    table[class='body'] .wrapper {
                      padding: 15px !important;
                    }
                    table[class='body'] .container {
                      width: 100% !important;
                      padding: 0 !important;
                    }
                    table[class='body'] .column {
                      width: 100% !important;
                    }
                    table[class='body'] .stats .column {
                      width: 50% !important;
                    }
                    table[class='body'] .hero-image,
                    table[class='body'] .thumb {
                      width: 100% !important;
                      height: auto !important;
                    }
                    table[class='body'] .btn table,
                    table[class='body'] .btn a {
                      width: 100% !important;
                    }
                    table[class='body'] .stats-table {
                      display: none !important;
                    }
                    table[class='body'] .stats-labels .label,
                    table[class='body'] .category-labels .label {
                      font-size: 10px !important;
                    }
                    table[class='body'] .credits table {
                      table-layout: auto !important;
                    }
                    table[class='body'] .credits .label {
                      font-size: 11px !important;
                    }
                  }
                </style>
                <style type="text/css">
                  @font-face {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 300;
                    src: local('Open Sans Light'), local('OpenSans-Light'),
                      url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTYnF5uFdDttMLvmWuJdhhgs.ttf)
                        format('truetype');
                  }
              
                  @font-face {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Open Sans'), local('OpenSans'),
                      url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf)
                        format('truetype');
                  }
              
                  @font-face {
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 600;
                    src: local('Open Sans Semibold'), local('OpenSans-Semibold'),
                      url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSonF5uFdDttMLvmWuJdhhgs.ttf)
                        format('truetype');
                  }
                </style>
              </head>
              <body
                style="
                  font-size: 16px;
                  background-color: #fdfdfd;
                  margin: 0;
                  padding: 0;
                  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', Helvetica, Arial,
                    sans-serif;
                  -webkit-text-size-adjust: 100%;
                  line-height: 1.5;
                  -ms-text-size-adjust: 100%;
                  -webkit-font-smoothing: antialiased;
                  height: 100% !important;
                  width: 100% !important;
                "
              >
                <table
                  bgcolor="#fdfdfd"
                  class="body"
                  style="
                    box-sizing: border-box;
                    border-spacing: 0;
                    mso-table-rspace: 0pt;
                    mso-table-lspace: 0pt;
                    width: 100%;
                    background-color: #fdfdfd;
                    border-collapse: separate !important;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          box-sizing: border-box;
                          padding: 0;
                          font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', Helvetica,
                            Arial, sans-serif;
                          font-size: 16px;
                          vertical-align: top;
                        "
                        valign="top"
                      >
                        &nbsp;
                      </td>
                      <td
                        class="container"
                        style="
                          box-sizing: border-box;
                          padding: 0;
                          font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', Helvetica,
                            Arial, sans-serif;
                          font-size: 16px;
                          vertical-align: top;
                          display: block;
                          width: 600px;
                          max-width: 600px;
                          margin: 0 auto !important;
                        "
                        valign="top"
                        width="600"
                      >
                        <div
                          class="content"
                          style="
                            box-sizing: border-box;
                            display: block;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 10px;
                          "
                        >
                          <div
                            class="block"
                            style="
                              box-sizing: border-box;
                              width: 100%;
                              margin-bottom: 30px;
                              background: #ffffff;
                              border: 1px solid #f0f0f0;
                            "
                          >
                            <table
                              style="
                                box-sizing: border-box;
                                width: 100%;
                                border-spacing: 0;
                                mso-table-rspace: 0pt;
                                mso-table-lspace: 0pt;
                                border-collapse: separate !important;
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="wrapper"
                                    style="
                                      box-sizing: border-box;
                                      font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica',
                                        Helvetica, Arial, sans-serif;
                                      font-size: 16px;
                                      vertical-align: top;
                                      padding: 30px;
                                    "
                                    valign="top"
                                  >
                                    <table
                                      style="
                                        box-sizing: border-box;
                                        width: 100%;
                                        border-spacing: 0;
                                        mso-table-rspace: 0pt;
                                        mso-table-lspace: 0pt;
                                        border-collapse: separate !important;
                                      "
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              box-sizing: border-box;
                                              padding: 0;
                                              font-family: 'Open Sans', 'Helvetica Neue',
                                                'Helvetica', Helvetica, Arial, sans-serif;
                                              font-size: 16px;
                                              vertical-align: top;
                                            "
                                            valign="top"
                                          >
                                            <h2
                                              style="
                                                margin: 0;
                                                margin-bottom: 30px;
                                                font-family: 'Open Sans', 'Helvetica Neue',
                                                  'Helvetica', Helvetica, Arial, sans-serif;
                                                font-weight: 300;
                                                line-height: 1.5;
                                                font-size: 24px;
                                                color: #294661 !important;
                                              "
                                            >
                                              You're on your way!<br />
                                              Let's confirm your email address.
                                            </h2>
              
                                            <p
                                              style="
                                                margin: 0;
                                                margin-bottom: 30px;
                                                color: #294661;
                                                font-family: 'Open Sans', 'Helvetica Neue',
                                                  'Helvetica', Helvetica, Arial, sans-serif;
                                                font-size: 16px;
                                                font-weight: 300;
                                              "
                                            >
                                              By clicking on the following link, you are
                                              confirming your email address.
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            style="
                                              box-sizing: border-box;
                                              padding: 0;
                                              font-family: 'Open Sans', 'Helvetica Neue',
                                                'Helvetica', Helvetica, Arial, sans-serif;
                                              font-size: 16px;
                                              vertical-align: top;
                                            "
                                            valign="top"
                                          >
                                            <table
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="btn btn-primary"
                                              style="
                                                box-sizing: border-box;
                                                border-spacing: 0;
                                                mso-table-rspace: 0pt;
                                                mso-table-lspace: 0pt;
                                                width: 100%;
                                                border-collapse: separate !important;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    style="
                                                      box-sizing: border-box;
                                                      padding: 0;
                                                      font-family: 'Open Sans',
                                                        'Helvetica Neue', 'Helvetica',
                                                        Helvetica, Arial, sans-serif;
                                                      font-size: 16px;
                                                      vertical-align: top;
                                                      padding-bottom: 15px;
                                                    "
                                                    valign="top"
                                                  >
                                                    <table
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        box-sizing: border-box;
                                                        border-spacing: 0;
                                                        mso-table-rspace: 0pt;
                                                        mso-table-lspace: 0pt;
                                                        width: auto;
                                                        border-collapse: separate !important;
                                                      "
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            bgcolor="#348eda"
                                                            style="
                                                              box-sizing: border-box;
                                                              padding: 0;
                                                              font-family: 'Open Sans',
                                                                'Helvetica Neue', 'Helvetica',
                                                                Helvetica, Arial, sans-serif;
                                                              font-size: 16px;
                                                              vertical-align: top;
                                                              background-color: #348eda;
                                                              border-radius: 2px;
                                                              text-align: center;
                                                            "
                                                            valign="top"
                                                          >
                                                            <a
                                                              href="${url}"
                                                              style="
                                                                box-sizing: border-box;
                                                                border-color: #348eda;
                                                                font-weight: 400;
                                                                text-decoration: none;
                                                                display: inline-block;
                                                                margin: 0;
                                                                color: #ffffff;
                                                                background-color: #348eda;
                                                                border: solid 1px #348eda;
                                                                border-radius: 2px;
                                                                cursor: pointer;
                                                                font-size: 14px;
                                                                padding: 12px 45px;
                                                              "
                                                              target="_blank"
                                                              >Confirm Email Address</a
                                                            >
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </body>
            `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail;