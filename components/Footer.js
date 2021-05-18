import Image from "next/image";
import Link from "next/link";
import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import footer from "../styles/footer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";

export default function Footer() {
    const styles = footer();

    return (
        <footer className={styles.footer}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} className={styles.footerSection}>
                        <Typography variant="h6" component="h2">
                            GERVICH_STORE.ID
                        </Typography>
                        <section className={styles.footerInfo}>
                            <LocationOnIcon className={styles.infoIcons} />
                            <div>
                                <Typography>Alamat</Typography>
                                <Typography className={styles.footerSubInfo}>
                                    Jl. Dewi Sartika, Palu, Sulawesi Tengah
                                </Typography>
                            </div>
                        </section>
                        <section className={styles.footerInfo}>
                            <PhoneInTalkIcon className={styles.infoIcons} />
                            <div>
                                <Typography>Kontak</Typography>
                                <Typography className={styles.footerSubInfo}>
                                    +62 821-9985-XXXX
                                </Typography>
                            </div>
                        </section>
                        <section className={styles.footerInfo}>
                            <MailIcon className={styles.infoIcons} />
                            <div>
                                <Typography>FAQ</Typography>
                                <Typography className={styles.footerSubInfo}>
                                    Gervich_StoreID@gmail.com
                                </Typography>
                            </div>
                        </section>
                    </Grid>
                    <Grid item xs={12} sm={6} className={styles.footerSection}>
                        <Typography variant="h6" component="h2">
                            IKUTI KAMI DI SOSIAL MEDIA
                        </Typography>
                        <section className={styles.socialSection}>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                className={styles.socialIcons}
                            >
                                <Image
                                    src="/icons/instagram.svg"
                                    width={30}
                                    height={30}
                                    alt="gervichstore instagram"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                className={styles.socialIcons}
                            >
                                <Image
                                    src="/icons/facebook.svg"
                                    width={30}
                                    height={30}
                                    alt="gervichstore facebook"
                                />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                className={styles.socialIcons}
                            >
                                <Image
                                    src="/icons/twitter.svg"
                                    width={30}
                                    height={30}
                                    alt="gervichstore twitter"
                                />
                            </a>
                        </section>
                        <section className={styles.socialSection}>
                            <Typography className={styles.footerSubInfo}>
                                © 2020 - {new Date().getFullYear()}
                                {". "}
                                GERVICH_STORE.ID
                            </Typography>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
