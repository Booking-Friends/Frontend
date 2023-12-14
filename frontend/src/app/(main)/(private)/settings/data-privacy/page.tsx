"use client"
import { ScrollArea } from "@/components/ui/scroll-area";


const DataPrivacyPage = () => {
    return (
        <ScrollArea className="w-[80%] px-20 py-8 text-zinc-500 h-[700px]">
            <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-2xl text-black dark:text-white mb-7">Privacy Policy for FILMAX</h2>

                <p>
                    At FILMAX, we understand the importance of privacy and are committed to protecting the personal information of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services, including our website and mobile applications.
                </p>

                <section>
                    <h3>Information We Collect:</h3>
                    <ol>
                        <li>
                            <strong>Account Information:</strong> When you sign up for [Service Name], we collect basic account information such as your name, email address, and password to ensure the security and personalization of your account.
                        </li>
                    </ol>
                </section>

                <section>
                    <h3>How We Use Your Information:</h3>
                    <ol>
                        <li>
                            <strong>Providing and Improving Our Service:</strong> We use your information to deliver, personalize, and enhance your experience with [Service Name]. This includes recommending content, optimizing playback quality, and addressing technical issues.
                        </li>
                    </ol>
                </section>
                <section>
                    <h3>Data Security:</h3>
                    <ol>
                        <li>
                            <strong>Encryption:</strong> Your data is transmitted securely using industry-standard encryption protocols to protect it from unauthorized access.
                        </li>
                    </ol>
                </section>
                <section>
                    <h3>Data Sharing:</h3>
                    <ol>
                        <li>
                            <strong>Third-Party Services:</strong> We may share necessary information with trusted third-party service providers for functions such as payment processing and customer support. These partners are obligated to maintain the confidentiality and security of your data.
                        </li>
                    </ol>
                </section>
                <section>
                    <h3>Your Choices:</h3>
                    <ol>
                        <li>
                            <strong>Account Settings:</strong> You can manage your account settings to control the information you share and adjust privacy preferences.
                        </li>
                    </ol>
                </section>
                <section>
                    <p>
                        We may update this Privacy Policy to reflect changes in our practices. We encourage you to review this policy periodically.
                    </p>
                </section>
                <footer>
                    <p>
                        By using FILMAX, you agree to the terms outlined in this Privacy Policy. If you have any questions or concerns, please contact our support team at <a href="mailto:contact@email.com">contact@email.com</a>.
                    </p>
                    <p>Last Updated: 05.12.2023</p>
                    <p>Thank you for choosing FILMAX. Your privacy is our priority.</p>
                </footer>
            </div>
        </ScrollArea>
    );
}

export default DataPrivacyPage;