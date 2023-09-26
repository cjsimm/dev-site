import './globals.css'
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';

const noto_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500'],
})

export const metadata: Metadata = {
  title: `cSimm`,
  description: 'Development site and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={noto_mono.className}>
      <body>
        <div className='header-container'>
          <header className='site-header'>
            <div className="logo-container">
              <svg className='logo' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1">
                  <path id="c" stroke="black" d="M21.471 10.0519C21.471 7.37765 18.919 6.84733 16.3282 7.0337C12.2996 7.32351 9.22113 11.1863 7.95811 14.5369C6.21589 19.1587 6.44717 23.3467 12.0753 24.7197C14.6586 25.35 17.7995 24.8378 20.2494 23.9722C23.1559 22.9454 24.2979 21.3097 25 18.6834" stroke-width="3" stroke-linecap="round"/>
                  <path id="Subtract" fill-rule="evenodd" d="M0 0H32V4V28V32H4H0V4V0ZM27.8562 28H4V4H28V27.8961C28.0851 27.842 28.3102 27.7114 28.3472 27.7168C28.3561 27.7182 28.3541 27.7274 28.3365 27.7476C28.3114 27.8179 28.2831 27.8838 28.2538 27.9393L28.2438 27.9578L28.2358 27.9719C28.1753 28.076 27.6873 28.619 27.4738 28.5895C27.3178 28.6613 27.1427 28.712 27.2308 28.5356C27.2802 28.4368 27.3359 28.3476 27.4171 28.2709C27.5498 28.1456 27.6747 28.088 27.8168 28.0298L27.8562 28ZM24.544 2.10202L24.5786 2.10817L24.5788 2.10817C24.7171 2.11323 24.8506 2.12888 24.9865 2.14996C25.0066 2.15307 25.0267 2.15631 25.047 2.15965C25.1211 2.17188 25.1949 2.18467 25.2685 2.19797C25.2415 2.21035 25.2137 2.22187 25.1892 2.232C25.1616 2.24339 25.1383 2.25303 25.1254 2.26014C24.9659 2.34784 24.7962 2.33599 24.6231 2.30028C24.5691 2.28916 24.5149 2.27572 24.4605 2.26225L24.4605 2.26224C24.328 2.22941 24.1948 2.19641 24.0641 2.19641C24.0426 2.19641 24.0081 2.19967 23.9687 2.20339C23.8708 2.21265 23.743 2.22473 23.7111 2.19641C23.7015 2.18784 23.6912 2.17895 23.6808 2.16989C23.5788 2.08135 23.4573 1.97582 23.6719 1.97582C23.9015 1.97582 24.1262 2.02033 24.3503 2.06473L24.3907 2.07272C24.3923 2.05091 24.4376 2.0666 24.4864 2.08348C24.5059 2.09025 24.526 2.09721 24.544 2.10202ZM26.6157 2.32069C26.6942 2.35701 26.7735 2.39204 26.8534 2.42681L26.8669 2.43266L26.8669 2.43267C26.9754 2.47958 27.5887 2.74479 27.3853 2.69153C26.6781 2.50632 25.9864 2.32776 25.2685 2.19797C25.3286 2.17036 25.3841 2.13848 25.3877 2.10817C25.4 2.00317 25.4465 2.01029 25.5457 2.02549L25.5739 2.02974C25.7259 2.05179 25.8769 2.11223 26.0278 2.17262C26.2168 2.24828 26.4057 2.32387 26.596 2.32387C26.6038 2.32387 26.6103 2.32277 26.6157 2.32069ZM26.552 2.07966C26.6071 2.17335 26.6714 2.29921 26.6157 2.32069C26.4556 2.24662 26.299 2.16722 26.1475 2.07386C26.1256 2.06039 26.0918 2.04266 26.0558 2.02379L26.0557 2.02373L26.0557 2.02371C25.957 1.97193 25.8419 1.91158 25.9122 1.90719C25.9888 1.9024 26.1043 1.94544 26.205 1.98294C26.2579 2.00266 26.3067 2.02085 26.3436 2.02974L26.4701 2.06006L26.552 2.07966ZM27.6828 1.8008C27.5758 1.76968 27.4678 1.74238 27.3583 1.72091C27.295 1.70849 27.2869 1.73366 27.3036 1.77192C27.2775 1.76433 27.2531 1.76012 27.2309 1.76012C27.1644 1.76012 27.2312 1.78462 27.3278 1.81429C27.3692 1.87578 27.4384 1.94653 27.4539 1.96111C27.4632 1.96987 27.4725 1.97852 27.4819 1.98708C27.4267 1.98541 27.3721 1.98196 27.3302 1.97932C27.2989 1.97734 27.2747 1.97582 27.2627 1.97582C27.0311 1.97582 26.9711 1.97743 27.1867 2.13262L27.1181 2.11798C27.0719 2.108 26.9899 2.0812 26.9172 2.05743C26.8304 2.02905 26.7569 2.005 26.7732 2.0191C26.6284 1.9646 26.484 1.92284 26.4906 1.97582C26.4911 1.97958 26.5015 1.99647 26.5165 2.02094L26.5166 2.02109C26.5268 2.03771 26.5392 2.05781 26.552 2.07966C26.7196 2.11985 26.8866 2.1608 27.0523 2.20793C27.0595 2.21236 27.0667 2.2167 27.074 2.22092C27.2067 2.29788 27.343 2.36419 27.4819 2.42377C27.3336 2.38698 27.1862 2.34736 27.0397 2.29446C26.6848 2.16631 27.0587 2.33987 27.2014 2.38269C27.3582 2.42973 27.5169 2.47319 27.6758 2.51671L27.6758 2.51672L27.6758 2.51672L27.6758 2.51673L27.6759 2.51673L27.6759 2.51674L27.6759 2.51674L27.676 2.51676L27.8229 2.55714C27.9579 2.60581 28.0943 2.65125 28.231 2.69681C28.3273 2.72892 28.4238 2.76108 28.5201 2.79447C28.6365 2.83483 29.0337 2.97149 28.6794 2.83124C28.4015 2.72123 28.1127 2.63722 27.8229 2.55714C27.708 2.51571 27.5942 2.47194 27.4819 2.42377C27.5246 2.43437 27.5674 2.44474 27.6103 2.45512L27.6103 2.45513C27.7025 2.47747 27.795 2.49988 27.8877 2.52486C28.02 2.56047 27.8598 2.49525 27.6738 2.42384C27.7549 2.4441 27.8366 2.46227 27.9188 2.47938C27.9998 2.50618 28.0806 2.53372 28.1614 2.56125L28.1614 2.56128L28.1615 2.56129C28.3181 2.61467 28.4747 2.66805 28.6329 2.71604C28.8228 2.77365 28.9116 2.7802 28.6819 2.67682L28.6034 2.64156C28.8446 2.71129 29.1312 2.78235 29.2505 2.71604C29.2579 2.71194 29.1609 2.65268 29.0254 2.57427C29.0933 2.59355 29.1614 2.6123 29.2296 2.63078C29.3123 2.65865 29.5955 2.72862 29.3829 2.67192C29.3318 2.65829 29.2807 2.64461 29.2296 2.63078L29.2211 2.6278C29.1379 2.59722 29.054 2.56874 28.9695 2.54203C28.7007 2.38789 28.3293 2.18406 28.2799 2.1621C28.0981 2.0813 27.912 2.01143 27.7252 1.94346C27.7305 1.90725 27.7081 1.85414 27.6828 1.8008ZM29.5936 1.65115C29.5462 1.64055 29.4989 1.62941 29.4515 1.6176C29.3257 1.53724 29.1914 1.47179 29.0496 1.41207C28.9411 1.36638 28.9159 1.40703 28.9275 1.47236C28.8116 1.438 28.6965 1.40102 28.5839 1.35815C28.5603 1.3492 28.5302 1.32982 28.4998 1.31027C28.4358 1.26921 28.3707 1.22737 28.3633 1.27971C28.3577 1.3187 28.682 1.45105 28.7187 1.46599C28.7438 1.47625 28.8161 1.49968 28.8663 1.51592C28.9238 1.53456 28.952 1.54371 28.8461 1.51256C28.7237 1.47655 28.5901 1.45193 28.4601 1.42796C28.4141 1.41947 28.3685 1.41107 28.324 1.40227C28.3037 1.39825 28.2756 1.39208 28.2416 1.38463C27.998 1.33124 27.4545 1.21211 27.3485 1.34834C27.3367 1.36357 27.6034 1.46436 27.6157 1.46844C27.6739 1.48784 27.7191 1.50222 27.7532 1.51307L27.7532 1.51308C27.816 1.53307 27.8412 1.54108 27.8406 1.5464C27.8402 1.54995 27.8284 1.55231 27.8086 1.55623C27.7963 1.55869 27.7808 1.56176 27.7632 1.56612C27.7086 1.53588 27.6537 1.50579 27.5985 1.4758C27.3771 1.35552 27.6183 1.49935 27.7416 1.57185C27.7106 1.58064 27.6748 1.59344 27.6377 1.61306C27.6015 1.63222 27.6348 1.70114 27.6703 1.77487L27.6828 1.8008C27.8888 1.86076 28.091 1.9349 28.2929 2.00892L28.2929 2.00893C28.4175 2.05462 28.542 2.10026 28.6672 2.14249C28.6841 2.14819 28.7132 2.15642 28.743 2.1636C28.7864 2.18805 28.808 2.19905 28.7618 2.16797C28.8353 2.18431 28.8989 2.18973 28.7799 2.13023C28.7034 2.09196 28.6273 2.05336 28.5515 2.01434C28.6691 2.03323 28.7909 2.04435 28.8833 2.05279L28.8834 2.05279C28.9295 2.057 28.9683 2.06055 28.9956 2.06405L29.0058 2.06535C29.0642 2.11697 29.1278 2.16807 29.1859 2.2135C28.952 2.1856 28.718 2.16881 28.7652 2.21602C28.9165 2.36732 29.2408 2.46841 29.5287 2.48362L29.5604 2.50739L29.5239 2.507C29.4425 2.50612 29.3611 2.50525 29.28 2.50525C29.1053 2.50525 29.4087 2.62474 29.4635 2.64634L29.4662 2.64741C29.5266 2.67123 29.595 2.69113 29.6646 2.71138C29.7794 2.7448 29.8974 2.77917 29.9883 2.83369C30.1016 2.90166 29.9942 2.82387 29.8337 2.70755C29.7492 2.64629 29.6499 2.57435 29.5604 2.50739C29.7326 2.50919 29.905 2.51042 30.0766 2.5028L30.0925 2.50233C30.1701 2.50039 30.4292 2.49393 30.3462 2.3925C30.2375 2.2597 30.0991 2.14742 29.9648 2.03855C29.9389 2.01755 29.9132 1.99668 29.8878 1.97582C29.8738 1.96425 29.6094 1.73288 29.5936 1.65115ZM29.5936 1.65115C29.5902 1.63353 29.5984 1.62286 29.6231 1.62286C29.7259 1.62286 29.8431 1.66014 29.9526 1.69497C30.0001 1.71005 30.0461 1.72468 30.0888 1.73561C30.1158 1.74251 30.2371 1.76535 30.3334 1.7835C30.4385 1.80329 30.5139 1.81749 30.405 1.79934L30.3083 1.78329C30.0674 1.74338 29.8304 1.70413 29.5936 1.65115ZM22.5194 1.95133C22.5067 1.95444 22.5079 1.96201 22.5297 1.97582C22.5395 1.98203 22.5494 1.98815 22.5594 1.99418C22.4242 1.93447 22.2887 1.87532 22.1522 1.81895C22.0684 1.78432 22.1692 1.82427 22.2744 1.86599C22.3505 1.89614 22.4288 1.92722 22.4415 1.9317C22.4638 1.93962 22.4904 1.94588 22.5194 1.95133ZM22.5594 1.99418L22.661 2.03909L22.661 2.03912L22.6611 2.03913C22.7959 2.09883 22.9308 2.15852 23.0665 2.21602C23.17 2.25989 23.6456 2.49273 23.2797 2.32387C23.2001 2.2871 23.117 2.2527 23.0333 2.21804L23.0333 2.21803L23.0332 2.21803C22.8708 2.15076 22.706 2.08253 22.5594 1.99418ZM23.2937 2.11123L23.2938 2.11124C23.4665 2.14706 23.6396 2.18297 23.7945 2.25524C24.0197 2.36036 23.4978 2.19779 23.1308 2.07617C23.1847 2.08861 23.2392 2.09991 23.2937 2.11123ZM25.4317 30.1591C25.4829 30.1775 25.5401 30.2011 25.5883 30.221L25.5884 30.221C25.6257 30.2364 25.6575 30.2496 25.6769 30.2563C25.7671 30.2875 25.8525 30.3333 25.9318 30.3862C26.0277 30.4501 25.883 30.3786 25.7139 30.2951C25.6134 30.2454 25.5042 30.1915 25.4317 30.1591ZM24.8652 30.2724C25.4127 30.5298 25.8959 30.7749 25.5543 30.6435C25.3619 30.5695 25.0875 30.4378 24.8652 30.2724ZM3.85998 30.0974L3.86104 30.0979C3.92449 30.1239 3.98783 30.15 4.0511 30.1758L4.11314 30.2033L4.12097 30.2071C4.19173 30.2409 4.3137 30.3011 4.41032 30.3488L4.41054 30.3489L4.41174 30.3495L4.41193 30.3496L4.41205 30.3497L4.4121 30.3497L4.41212 30.3497L4.4123 30.3498C4.55205 30.4189 4.63722 30.4609 4.43344 30.3568C4.33154 30.3047 4.22724 30.2548 4.12112 30.2069C4.1681 30.1641 4.18671 30.1147 4.16137 30.0577C4.09278 29.9034 3.6929 29.8051 3.43218 29.741L3.43216 29.741C3.35509 29.722 3.29017 29.7061 3.24957 29.6925C3.18474 29.6709 3.11702 29.6466 3.04732 29.6215C2.7442 29.5125 2.4036 29.3901 2.10002 29.4205C1.96692 29.4338 2.05101 29.4826 2.1677 29.5278C2.28167 29.5721 2.42675 29.6129 2.43092 29.6141C2.83028 29.7265 3.24358 29.8557 3.64375 30.0089C3.71599 30.0383 3.78805 30.0679 3.85998 30.0974ZM31.1771 31.6387C31.2842 31.5851 31.3802 31.5155 31.4763 31.4458C31.531 31.4061 31.5857 31.3664 31.6425 31.3297C31.6454 31.3087 31.6486 31.2888 31.6526 31.271C31.6548 31.2609 31.6575 31.2507 31.6605 31.2407C31.6749 31.1924 31.6969 31.1452 31.7187 31.0985C31.7471 31.0377 31.775 30.9778 31.7849 30.9181C31.8008 30.8227 31.8732 30.8948 31.8732 30.9622V31.2269L31.8731 31.2558L31.8728 31.2936L31.8728 31.294C31.8715 31.4691 31.8702 31.6377 31.9516 31.8004C32.0424 31.982 31.8487 31.9796 31.6736 31.9774L31.6481 31.9771L31.6183 31.9769C31.5163 31.9769 30.9405 31.8887 31.2825 31.8887C31.3615 31.8887 31.8136 31.8446 31.5423 31.8446C31.513 31.8446 31.4668 31.8387 31.4191 31.8275C31.3065 31.8012 31.1851 31.7454 31.256 31.6681H31.2555C31.2264 31.6681 31.1949 31.6717 31.1694 31.6746C31.1135 31.681 31.0863 31.684 31.1771 31.6387ZM18.3042 29.9907C18.4121 30.0043 18.52 30.0179 18.6276 30.0332C18.6942 30.0427 18.6403 30.0321 18.5482 30.0139C18.4375 29.9921 18.2716 29.9593 18.1938 29.9376L18.1835 29.9348L18.0959 29.9103C18.0504 29.8898 18.005 29.8688 17.9596 29.8479L17.9595 29.8478L17.9595 29.8478C17.7539 29.7528 17.5492 29.6582 17.3334 29.6043C17.2718 29.5889 17.2593 29.6245 17.3138 29.6484C17.564 29.7579 17.8321 29.8365 18.0959 29.9103C18.1546 29.9368 18.2137 29.9627 18.2732 29.9869L18.3042 29.9907ZM0.92886 1.22128C0.883485 1.15362 0.840899 1.08382 0.800666 1.01268L0.831164 1.03553C0.981995 1.14839 1.21204 1.32052 0.955381 1.23069L0.92886 1.22128ZM0.494717 0.33009C0.540752 0.496459 0.630535 0.682578 0.690666 0.804206C0.725411 0.874486 0.761948 0.944208 0.800666 1.01268C0.771436 0.990696 0.747638 0.972453 0.734785 0.961075C0.57294 0.817802 0.38483 0.615939 0.266631 0.434095C0.189889 0.31603 0.137077 0.22905 0.28869 0.274775C0.313265 0.282187 0.346355 0.290808 0.385077 0.300897C0.41812 0.309506 0.455263 0.319184 0.494717 0.33009ZM0.699013 0.394165C0.629959 0.369053 0.559248 0.347928 0.494717 0.33009C0.476527 0.26435 0.465167 0.201694 0.465167 0.147319C0.465167 0.135441 0.550211 0.229696 0.627415 0.315262L0.627416 0.315263C0.653337 0.343992 0.678375 0.371741 0.699013 0.394165ZM0.699013 0.394165C0.889904 0.463584 1.06813 0.56347 1.06813 0.708614C1.06813 0.735491 0.82469 0.514208 0.759667 0.455104L0.744589 0.441448C0.736385 0.434209 0.719966 0.416932 0.699013 0.394165ZM10.1881 1.5478C10.0966 1.54907 10.0059 1.5461 9.91996 1.53177C9.70656 1.49621 9.98929 1.48159 10.0958 1.51648C10.1267 1.52661 10.1575 1.53706 10.1881 1.5478ZM8.11975 2.67265C7.86256 2.64947 7.60875 2.59951 7.35356 2.5461C7.34755 2.54484 7.33545 2.54296 7.31911 2.54043C7.22746 2.52623 7.00253 2.49136 6.97128 2.42886C6.95425 2.3948 7.22217 2.43587 7.23123 2.43906C7.39023 2.49492 7.5516 2.53156 7.71253 2.56809C7.84917 2.59912 7.98548 2.63006 8.11975 2.67265ZM7.71981 2.44181C7.44426 2.41864 7.25417 2.39895 7.43512 2.40848C7.50816 2.41232 7.60845 2.42453 7.71981 2.44181ZM9.28426 1.97079C8.93353 1.96476 8.70974 1.94974 8.94896 1.94974C9.06274 1.94974 9.17395 1.95687 9.28426 1.97079ZM2.06582 7.8948C2.06383 8.02263 2.06316 8.15042 2.07296 8.27779C2.08445 8.42713 2.15961 8.86847 2.15961 8.71869C2.15961 8.68999 2.15978 8.66129 2.15995 8.63261L2.15995 8.63254C2.16112 8.43584 2.16228 8.23999 2.10864 8.04842L2.06582 7.8948ZM1.28423 6.7468L1.28324 6.79106C1.29756 6.83642 1.31416 6.88101 1.33388 6.92451C1.37641 7.01832 1.41133 7.12368 1.44702 7.23135C1.53839 7.50699 1.63479 7.79782 1.87672 7.94903C1.95089 7.99538 1.71517 7.17558 1.68303 7.08762L1.67805 7.07394C1.61647 6.90473 1.28801 6.00214 1.28801 6.50145C1.28801 6.5801 1.28615 6.66235 1.28423 6.74677L1.28423 6.7468ZM1.05185 7.8217L1.0267 7.7554C1.03741 7.79491 1.04791 7.83446 1.05841 7.87403C1.07991 7.95504 1.10143 8.03616 1.1249 8.11724C1.16123 8.24274 1.27471 8.57365 1.37976 8.65243C1.47525 8.72405 1.32831 8.44167 1.26283 8.31584L1.25233 8.29563C1.17431 8.14517 1.11301 7.98324 1.05185 7.8217ZM30.9773 27.4544C30.8744 27.3615 30.7763 27.2635 30.6829 27.1659L30.6417 27.1282L30.6321 27.1192C30.601 27.0905 30.5566 27.0545 30.5057 27.0131C30.3092 26.8534 30.0153 26.6146 30.0153 26.4133C30.0153 26.4121 30.1025 26.4895 30.1647 26.5469C30.0908 26.4706 30.023 26.3901 29.9643 26.3063C29.9492 26.2847 29.8796 26.1406 29.9592 26.1406C29.9946 26.1406 30.1212 26.3535 30.1943 26.4763L30.1943 26.4764L30.1945 26.4766C30.2194 26.5184 30.238 26.5498 30.2447 26.5586C30.2923 26.6215 30.3389 26.6844 30.3844 26.7477C30.4589 26.8084 30.5361 26.8649 30.6139 26.9166C30.6609 27.0029 30.7076 27.0882 30.7595 27.1651C30.8052 27.2329 30.8548 27.3017 30.9078 27.3692C31.0201 27.4703 31.1392 27.5778 31.2312 27.663C31.3749 27.7961 31.4526 27.8752 31.3355 27.7921C31.2053 27.6997 31.0851 27.5815 30.9773 27.4544ZM30.5614 26.8208C30.5777 26.8502 30.5939 26.8798 30.6099 26.9093L30.6139 26.9166C30.6522 26.942 30.6906 26.9663 30.7289 26.9893C30.7406 26.9963 30.7544 27.0043 30.7699 27.0131L30.8377 27.072C30.8706 27.1005 30.9025 27.1281 30.9328 27.1549C30.9715 27.1892 31.007 27.2286 31.0425 27.268L31.0425 27.268C31.0941 27.3253 31.1458 27.3827 31.208 27.4251C31.2211 27.434 31.2386 27.4504 31.2564 27.4671C31.2952 27.5034 31.3355 27.5412 31.3355 27.5066C31.3355 27.3337 30.9891 27.1374 30.8024 27.0316L30.7699 27.0131C30.7004 26.9524 30.629 26.8883 30.5614 26.8208ZM30.2556 26.3927C30.2668 26.4185 30.2785 26.4407 30.288 26.449C30.4005 26.5474 30.4839 26.6818 30.5614 26.8208C30.4312 26.6908 30.3154 26.5481 30.2556 26.3927ZM30.2556 26.3927C30.2203 26.3119 30.1892 26.1959 30.2447 26.3623L30.2499 26.3774L30.2556 26.3927ZM30.4255 27.72C30.598 27.8538 30.7681 27.9899 30.9352 28.1312C30.7554 27.9997 30.5876 27.8639 30.4255 27.72ZM30.9352 28.1312L30.9736 28.1591C31.0956 28.247 31.4564 28.5889 31.1265 28.2967C31.0632 28.2406 30.9994 28.1855 30.9352 28.1312ZM29.8387 28.158C29.8195 28.1507 29.8003 28.1442 29.7808 28.1387C29.7368 28.1261 29.7227 28.0631 29.7885 28.1157C29.8053 28.1292 29.8221 28.1433 29.8387 28.158ZM30.4661 28.5465C30.3753 28.4949 30.2618 28.4055 30.2033 28.3595C30.1863 28.3461 30.174 28.3364 30.1682 28.3324C30.1093 28.291 29.995 28.2238 29.8949 28.165L29.8949 28.165C29.759 28.0852 29.6494 28.0208 29.7401 28.0571C29.9788 28.1526 30.2179 28.3459 30.436 28.5222L30.4661 28.5465ZM30.0382 16.8002C29.9849 16.7606 29.837 16.6594 29.7364 16.648C29.7182 16.626 29.7005 16.6087 29.684 16.5988C29.5725 16.5319 29.581 16.577 29.6513 16.6799C29.7097 16.7655 29.8109 16.8911 29.9214 17.0257C29.8576 17.0068 29.7937 16.9885 29.7299 16.9709C29.6135 16.9389 29.6194 16.9419 29.6642 16.9648C29.6824 16.9741 29.707 16.9866 29.7324 17.0015C29.8963 17.0971 30.0288 17.2223 30.1427 17.3736C30.2022 17.4526 30.2634 17.5317 30.3247 17.6111L30.3249 17.6113L30.325 17.6114L30.3251 17.6115C30.4758 17.8065 30.6278 18.003 30.7595 18.2044C30.7598 18.2049 30.4533 17.7123 30.3721 17.5928C30.2941 17.478 30.1473 17.2999 30.0024 17.1241L29.9214 17.0257L30.0044 17.0505L30.037 17.0951C30.1484 17.2479 30.2604 17.4014 30.4027 17.5265C30.491 17.6041 31.1344 18.0649 30.9634 17.7227C30.8725 17.5409 30.7348 17.3798 30.5794 17.2341C30.4136 17.0785 30.2275 16.9405 30.0561 16.8134L30.0382 16.8002ZM30.6591 17.2417L30.6792 17.2668C30.7156 17.3121 30.752 17.3573 30.7887 17.4023C30.8318 17.4637 30.8775 17.5235 30.9262 17.582L30.9344 17.5956L30.9344 17.5956C30.9876 17.6829 31.0662 17.8119 31.101 17.8119C31.1272 17.8119 30.9823 17.647 30.9529 17.6136L30.9481 17.608L30.9262 17.582C30.9084 17.553 30.8943 17.5302 30.8869 17.5214C30.8539 17.482 30.8212 17.4422 30.7887 17.4023C30.7594 17.3607 30.7313 17.3183 30.7042 17.275C30.7873 17.3022 30.8703 17.3292 30.9532 17.3557C31.1725 17.4259 31.4381 17.3774 31.1418 17.1722L31.1094 17.1497C30.9921 17.0676 30.8779 16.983 30.7637 16.8985L30.7637 16.8984L30.7637 16.8984L30.7636 16.8984L30.7636 16.8984L30.7636 16.8983L30.7636 16.8983L30.7635 16.8983C30.5924 16.7715 30.4214 16.6449 30.2406 16.5271C30.0314 16.2109 29.8457 15.9624 29.9261 16.1834C29.959 16.2738 30.0157 16.3602 30.087 16.4422C29.9589 16.4109 30.2934 16.8012 30.3543 16.8715C30.4587 16.9922 30.5589 17.1169 30.659 17.2416L30.659 17.2416L30.6591 17.2417ZM30.8523 16.8046C30.9127 16.8671 30.9969 16.9543 31.0753 17.0121C31.1242 17.0482 31.1708 17.0729 31.208 17.0729C31.2658 17.0729 30.9659 16.7976 30.943 16.7772C30.8833 16.7241 30.8256 16.6689 30.7687 16.6128C30.7061 16.532 30.6419 16.4526 30.5734 16.3771C30.5527 16.3542 30.5286 16.3256 30.5019 16.294C30.4646 16.2498 30.4224 16.1998 30.3776 16.1513C30.2829 16.049 30.1768 15.9538 30.0816 15.9362C30.0743 15.9348 30.3537 16.2051 30.3772 16.2267C30.4079 16.2549 30.4381 16.2836 30.468 16.3126C30.5593 16.4694 30.6604 16.6192 30.7952 16.7466C30.8096 16.7603 30.8292 16.7806 30.8523 16.8046ZM30.2502 15.5567L30.2585 15.5719C30.3004 15.5968 30.3407 15.6223 30.3743 15.6445C30.3971 15.6629 30.417 15.6787 30.4282 15.6864C30.4531 15.7037 30.4778 15.7212 30.5023 15.7389C30.5444 15.7724 30.5861 15.8064 30.6279 15.8403L30.628 15.8403L30.628 15.8404C30.771 15.9566 30.9144 16.0731 31.0704 16.1707C31.1011 16.1898 31.1482 16.2289 31.1935 16.2665C31.2724 16.3318 31.3458 16.3927 31.3176 16.3363C31.2759 16.253 31.1972 16.1858 31.1203 16.1201C31.0749 16.0813 31.0301 16.0431 30.9939 16.0025C30.944 15.9463 30.8947 15.891 30.8447 15.8369C30.8199 15.807 30.7951 15.7768 30.7702 15.7466C30.6057 15.5464 30.4395 15.3443 30.2345 15.192C30.1588 15.1358 30.4985 15.5018 30.5581 15.5539C30.6611 15.644 30.754 15.7387 30.8447 15.8369C30.9036 15.9077 30.963 15.9773 31.0245 16.0432C31.1768 16.2064 31.0198 16.1232 30.92 16.0509C30.8514 16.0011 30.7838 15.9498 30.7163 15.8986L30.7162 15.8986L30.7162 15.8986L30.7162 15.8985L30.7161 15.8985L30.7161 15.8985L30.716 15.8984L30.716 15.8984C30.6452 15.8447 30.5744 15.791 30.5023 15.7389L30.4724 15.7153L30.4486 15.6966C30.4331 15.6846 30.4068 15.6661 30.3743 15.6445L30.3324 15.6105L30.3324 15.6105C30.2842 15.5712 30.2385 15.5339 30.2421 15.5412L30.2502 15.5567ZM30.9859 16.4319C30.9597 16.4056 30.9322 16.3798 30.904 16.3548C30.7877 16.2516 30.6586 16.1611 30.5454 16.0942C30.2498 15.9196 30.7972 16.551 30.8665 16.6192C31.108 16.8568 31.0876 16.6896 31.0189 16.5109C31.0581 16.562 31.0986 16.6121 31.1418 16.66C31.1466 16.6654 31.1524 16.6721 31.1584 16.679L31.1585 16.6792C31.187 16.7122 31.2194 16.7498 31.1774 16.6753C31.1305 16.5917 31.0632 16.5093 30.9859 16.4319ZM29.9135 8.43058L29.8063 8.32876C29.7707 8.29483 29.6964 8.19879 29.8038 8.19879C29.9329 8.19879 30.0896 8.32999 30.2289 8.47417C30.298 8.54566 30.3628 8.62033 30.4179 8.68379L30.418 8.68386L30.418 8.68394L30.4181 8.684L30.4184 8.68431C30.4421 8.71165 30.464 8.7369 30.4837 8.75889C30.4244 8.72038 30.3629 8.68439 30.3007 8.6494C30.3209 8.70245 30.3425 8.75442 30.3721 8.80025C30.4052 8.85151 30.4437 8.89857 30.4823 8.94561L30.4823 8.94562C30.5308 9.00488 30.5793 9.06408 30.6168 9.13156C30.7961 9.45446 30.6495 9.26037 30.5103 9.07601L30.5102 9.07597C30.454 9.00146 30.3989 8.92854 30.367 8.89199C30.224 8.72802 30.0698 8.57927 29.9135 8.43058ZM30.5097 8.7875C30.5016 8.77876 30.4929 8.76918 30.4837 8.75889C30.5596 8.80823 30.6321 8.86172 30.6983 8.92258C30.9165 9.12304 30.5683 8.85024 30.5097 8.7875ZM30.3863 7.57862C30.2041 7.4176 30.0717 7.29472 30.209 7.36796C30.2852 7.40862 30.3407 7.48602 30.3863 7.57862ZM30.3315 6.91097C30.319 6.90069 30.307 6.88999 30.2956 6.87864C30.263 6.84601 30.2879 6.86792 30.3315 6.91097ZM30.5423 6.57938C30.5336 6.56655 30.5275 6.55801 30.525 6.55497C30.4911 6.51425 30.5479 6.56342 30.6132 6.62074L30.5622 6.59095L30.5423 6.57938ZM30.6291 6.63463L30.6132 6.62074C30.6406 6.63688 30.662 6.65008 30.6703 6.65691C30.7097 6.68949 30.8655 6.83061 30.7289 6.72063C30.7053 6.70162 30.6669 6.66786 30.6291 6.63463ZM1.53437 23.1504C1.60034 23.2261 1.66631 23.3017 1.73146 23.378C2.04627 23.7466 2.3706 24.1376 2.6158 24.558C2.62064 24.5662 2.74068 24.7227 2.74068 24.6242C2.74068 24.5551 2.65716 24.4781 2.59091 24.4171C2.56616 24.3943 2.54383 24.3737 2.52915 24.3566C2.41418 24.2225 2.31216 24.0781 2.2102 23.9339C2.10014 23.7782 1.99014 23.6225 1.86398 23.4799L1.83598 23.4479C1.76578 23.3673 1.6542 23.2391 1.53282 23.1486L1.53437 23.1504ZM2.06532 24.5401C1.83602 24.1656 1.5618 23.8087 1.26027 23.4871C1.35059 23.631 1.46249 23.7663 1.50338 23.8157L1.50339 23.8157L1.51228 23.8265C1.78337 24.1568 1.98835 24.4853 2.20549 24.851C2.44557 25.2554 2.13425 24.6527 2.06532 24.5401ZM1.06119 24.1782C1.051 24.1693 1.03335 24.1549 1.01079 24.1372L1.06295 24.1855C1.11998 24.2383 1.17699 24.291 1.23349 24.3443C1.35431 24.4713 1.46326 24.6071 1.5723 24.743C1.68993 24.8896 1.80764 25.0363 1.94044 25.1722C2.12104 25.357 1.66926 24.7951 1.62697 24.7465C1.50324 24.6044 1.36983 24.4728 1.23349 24.3443C1.17885 24.2869 1.12178 24.2312 1.06119 24.1782ZM1.14846 24.9126C1.25317 25.0222 1.34781 25.1426 1.41034 25.2614C1.48449 25.4022 1.28767 25.1206 1.14846 24.9126ZM2.23607 15.0544C2.0929 14.9147 1.94644 14.778 1.79995 14.6413C1.63376 14.4862 1.46754 14.331 1.30603 14.1714C1.32428 14.1807 1.34303 14.1913 1.36192 14.2032C1.67202 14.3981 1.9269 14.6117 2.15961 14.8964C2.2006 14.9465 2.24434 15.0066 2.29086 15.0706L2.29087 15.0706L2.29091 15.0707C2.31221 15.0999 2.33409 15.13 2.35656 15.1603C2.30849 15.1205 2.26653 15.0841 2.23607 15.0544ZM2.82988 15.6023C2.65027 15.535 2.49267 15.3438 2.35656 15.1603C2.42095 15.2136 2.49631 15.2731 2.56967 15.331C2.78809 15.5035 2.98883 15.6619 2.82988 15.6023ZM1.22052 14.8567L1.2404 14.8692C1.29166 14.9015 1.34209 14.9332 1.38995 14.9779C1.51991 15.0994 1.62956 15.2445 1.73934 15.3897L1.7777 15.4403C1.71037 15.3772 1.64378 15.3133 1.57854 15.2481C1.56116 15.2307 1.37354 15.0268 1.22052 14.8567ZM2.29724 15.9617C2.08426 15.8329 1.92863 15.639 1.7777 15.4403C1.862 15.5193 1.94746 15.5972 2.03292 15.675L2.03299 15.6751L2.03302 15.6751L2.03304 15.6751C2.13625 15.7691 2.23945 15.8631 2.34056 15.9591C2.43596 16.0498 2.42961 16.0457 2.3717 16.0084C2.35212 15.9958 2.32666 15.9795 2.29724 15.9617ZM10.731 30.4084C10.7521 30.4236 10.769 30.4346 10.7737 30.4375C10.9206 30.526 11.0657 30.612 11.223 30.6778C11.2418 30.6921 11.261 30.7073 11.2806 30.7227C11.3864 30.8063 11.5017 30.8975 11.6198 30.9013C11.7422 30.9052 11.4216 30.7515 11.3064 30.7102C11.2782 30.7 11.2504 30.6892 11.223 30.6778C11.1947 30.6562 11.1672 30.6366 11.1407 30.621C11.0092 30.5433 10.8709 30.4734 10.731 30.4084ZM8.32711 30.9166L8.33939 30.9211C8.63025 31.0271 8.46669 30.9594 8.3035 30.8985C8.28402 30.886 8.2647 30.8734 8.24556 30.8605C8.00132 30.6964 8.10471 30.7996 8.23786 30.8743C8.2673 30.8909 8.2982 30.906 8.32711 30.9166ZM7.94993 30.5853C8.00564 30.6233 8.06705 30.6601 8.13256 30.6951C7.98045 30.566 8.18134 30.6631 8.35547 30.7472C8.4311 30.7838 8.50168 30.8179 8.53609 30.8299L8.56965 30.8418C8.51373 30.8152 8.45135 30.7814 8.39847 30.7433L8.36639 30.7201C8.2531 30.638 8.11965 30.5412 7.99325 30.4961C7.86571 30.4505 7.83998 30.5102 7.94993 30.5853ZM8.79605 30.6515C8.84704 30.6726 8.89809 30.6912 8.9493 30.7082C8.91637 30.6729 8.87554 30.6447 8.81643 30.6286C8.73186 30.6055 8.68207 30.6044 8.79605 30.6515ZM9.49945 30.3457C9.66137 30.3623 9.81202 30.4153 9.96042 30.4761L9.9179 30.4499C9.77812 30.3632 9.61844 30.2642 9.48416 30.2642C9.38108 30.2642 9.4287 30.3385 9.49945 30.3457Z" fill="#940909"/>
                </g>      
              </svg>
            </div>  
            <nav className='navbar-above'>
              <ul className='navbar-container'>
                <li><Link className="header-link" href="/">About</Link></li>
                <li><Link className="header-link" href="/blog">Blog</Link></li>
                <li><a className="header-link" href="https://github.com/cjsimm" target='_blank'>Portfolio</a></li>
                <li><Link className="header-link" href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <ul className='social-container'>
              <li>
                <Link className='social-link' href='https://github.com/cjsimm'>
                  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link className='social-link' href='/'>
                  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </header>
        </div>
        {children}
      </body>
    </html>
  )
}
