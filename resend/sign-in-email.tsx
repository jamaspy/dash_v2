/* eslint-disable @next/next/no-img-element */
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const SignInEmail = ({ url }: { url: string }) => (
    <html lang="en">
        <body style={main}>
            <div style={container}>
                <section style={box}>
                    <img
                        src={`https://www.preacta.com/wp-content/uploads/2023/02/Preacta-Color-_-White.svg`}
                        width="300"
                        height="150"
                        alt="Preacta Talent Intelligence"
                        style={image}
                    />
                    <p style={paragraph}>Hi 👋🏻,</p>
                    <p style={paragraph}>
                        This is your secure link to sign in to Preacta Talent Intelligence.
                    </p>
                    <p style={paragraph}>Click the button below to log in.</p>
                    <a style={button} href={url}>
                        🪄 Magic Sign In Link
                    </a>

                    <hr style={hr} />

                    <p style={paragraph}>- Derek</p>
                    <hr style={hr} />
                    <p style={paragraph}>
                        <a href={baseUrl} style={anchor}>
                            Click here
                        </a>{" "}
                        to return to Preacta Talent Intelligence.
                    </p>
                    <p style={footer}>
                        Preacta Talent Intelligence PTY Ltd Copyright 2024 &copy;
                    </p>
                </section>
            </div>
        </body>
    </html>
);

export default SignInEmail;

const main = {
    padding: "1rem",
    backgroundColor: "#f7f6fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#221E1F",
    margin: "0 auto",
    padding: "20px",
    marginBottom: "64px",
    borderRadius: "18px",
    maxWidth: "600px",
};

const box = {
    padding: "0 48px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "10px 0",
};

const paragraph = {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
};

const anchor = {
    color: "#1B83BD",
};

const button = {
    backgroundColor: "#1B83BD",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "80%",
    padding: "10px",
    marginBottom: "20px",
};

const image = {
    display: "block",
    margin: "0 auto",
    marginBottom: "20px",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
};
