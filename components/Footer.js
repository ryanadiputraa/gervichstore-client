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
                                <Typography>Jl. Dewi Sartika</Typography>
                            </div>
                        </section>
                        <section className={styles.footerInfo}>
                            <PhoneInTalkIcon className={styles.infoIcons} />
                            <div>
                                <Typography>Kontak</Typography>
                                <Typography>+62 821-9985-9757</Typography>
                            </div>
                        </section>
                        <section className={styles.footerInfo}>
                            <MailIcon className={styles.infoIcons} />
                            <div>
                                <Typography>FAQ</Typography>
                                <Typography>
                                    CliventSondakh24@gmail.com
                                </Typography>
                            </div>
                        </section>
                    </Grid>
                    <Grid item xs={12} sm={6} className={styles.footerSection}>
                        <Typography variant="h6" component="h2">
                            IKUTI KAMI DI SOSIAL MEDIA
                        </Typography>
                        <section className={styles.socialSection}>
                            <Link href="#">
                                <a className={styles.socialIcons}>
                                    <Image
                                        src="/icons/instagram.svg"
                                        width={30}
                                        height={30}
                                        alt="gervichstore instagram"
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a className={styles.socialIcons}>
                                    <Image
                                        src="/icons/facebook.svg"
                                        width={30}
                                        height={30}
                                        alt="gervichstore facebook"
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a className={styles.socialIcons}>
                                    <Image
                                        src="/icons/twitter.svg"
                                        width={30}
                                        height={30}
                                        alt="gervichstore twitter"
                                    />
                                </a>
                            </Link>
                        </section>
                        <section className={styles.socialSection}>
                            <Typography>@ Copyright</Typography>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
