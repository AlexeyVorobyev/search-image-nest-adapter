export const yandexFetchHeaders = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'cookie': 'i_eaabs=1; yandexuid=1120219331708142124; yuidss=1120219331708142123; ymex=2023502123.yrts.1708142123; is_gdpr=0; amcuid=7675661521708222428; is_gdpr_b=COOiFBDk6wEoAg==; yashr=4030576271708464507; bh=EkEiTm90IEEoQnJhbmQiO3Y9Ijk5IiwgIkdvb2dsZSBDaHJvbWUiO3Y9IjEyMSIsICJDaHJvbWl1bSI7dj0iMTIxIhoFIng4NiIiECIxMjEuMC42MTY3LjE4NCIqAj8wMgIiIjoHIkxpbnV4IkIHIjYuNS4wIkoEIjY0IlJdIk5vdCBBKEJyYW5kIjt2PSI5OS4wLjAuMCIsICJHb29nbGUgQ2hyb21lIjt2PSIxMjEuMC42MTY3LjE4NCIsICJDaHJvbWl1bSI7dj0iMTIxLjAuNjE2Ny4xODQiWgI/MA==; gdpr=0; _ym_uid=1708467984616647010; receive-cookie-deprecation=1; font_loaded=YSv1; receive-cookie-deprecation=1; L=eApxXXQCc1FIcF9KQnxOeXJ0WllFY31UXTAiEQogSlI7Djphag==.1710357262.15647.376257.77aecaa652f21407cbfc612447f60fa7; yandex_login=mister.alex49; ys=udn.cDrQkNC70LXQutGB0LXQuSDQktC%2B0YDQvtCx0YzQtdCy#c_chck.3860315035; i=zWqNZTrJes4XlO0e44E1/6hWL10j7lZFOfD9s/taGClvVb9GFITPs83iXs4llUPaBBI1PuEdcCYwoOFVzNcsB9kpg34=; _ymab_param=o6loxwJ5mAZWLow1UE2Y_lKCD7Yq9cMnHpI_bB8A4SON_rYDhruoeYMute5mtJ-OuLLCJijQdHy-VRTn2tLMEo6mRj4; yabs-vdrf=Dr_rb901V7G00yV5bUW3ems01JUvb500UNf010; yabs-dsp=mts_banner.aGR6UEFVZnpST20tUzhEaGNPdDN2UQ==; _ym_d=1711245006; spravka=dD0xNzExMjQ1MjI5O2k9ODUuMTc1LjE5NC4yNTE7RD1GQUE0NjlGMDNFOUU5Njg1QzUyM0ZGOEFBOEE2NEY5NDRGMzJFNDJBQkY4QTc3NUIxODE3QjE3QUY4MTM0ODIyNTZEMzY3NkFCNTI0MTlFRUExNTU4OThERDlCRjM2OTY4ODVDRjAxRkZEQjQzMjM4QUU3QUIxQTYzNkJDMERBMUM3RTU0QzFFOEI4RjJCMTI5NTQ3QUMyNTYwOEE0OTc5RDA7dT0xNzExMjQ1MjI5OTE4ODEyNzQ3O2g9MzZmMjdiNmJlNGU0Y2IyOTgyZjkyYjM0ZDUyYmE5ZDM=; Session_id=3:1711317500.5.0.1708556384319:-8KvVQ:2a.1.2:1|306594728.0.2.3:1708556384|1130000064907499.91161.2.2:91161.3:1708647545|3:10285015.678402.xkGsHw1b6MfhdPHeTq6AR6cu44I; sessar=1.1188.CiBDKvg6YCmbPmpbC66X4b_QMU7xgxxbdP7SkkmDpGAxMA.l0A2d_tCdolAJhXw9fFImYc79Ylu7v_Kz32ISFfFGu8; sessionid2=3:1711317500.5.0.1708556384319:-8KvVQ:2a.1.2:1|306594728.0.2.3:1708556384|1130000064907499.91161.2.2:91161.3:1708647545|3:10285015.678402.fakesign0000000000000000000; _ym_isad=2; _ym_visorc=b; _yasc=kl5N4juF/35CI/nREcW1Z+dA6cUq/M8PuIkKcjGFcjGEjVbJHV1H58OcPavfuaUeBf/1APzuUvUHidUMtLdNvo8VfWeT; yp=2025717262.udn.cDrQkNC70LXQutGB0LXQuSDQktC%2B0YDQvtCx0YzQtdCy#2024007545.multib.1#1711642990.szm.0_8999999761581421:1920x1080:698x1103; bh=Ej8iTm90IEEoQnJhbmQiO3Y9Ijk5IiwiR29vZ2xlIENocm9tZSI7dj0iMTIxIiwiQ2hyb21pdW0iO3Y9IjEyMSIaBSJ4ODYiIhAiMTIxLjAuNjE2Ny4xODQiKgI/MDICIiI6ByJMaW51eCJCByI2LjUuMCJKBCI2NCJSXCJOb3QgQShCcmFuZCI7dj0iOTkuMC4wLjAiLCJHb29nbGUgQ2hyb21lIjt2PSIxMjEuMC42MTY3LjE4NCIsIkNocm9taXVtIjt2PSIxMjEuMC42MTY3LjE4NCIi; yabs-udb=SdLpSsbX; cycada=6k7OtwILXdl8AWz0IashX90HpmT9HejCPzTF2wfD4OQ=',
    'Device-Memory': '8',
    'Downlink': '10',
    'Dpr': '0.9',
    'Ect': '4g',
    'Rtt': '50',
    'Sec-Ch-Ua': `Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121`,
    'Sec-Ch-Ua-Arch': 'x86',
    'Sec-Ch-Ua-Bitness': '64',
    'Sec-Ch-Ua-Full-Version': '121.0.6167.184',
    'Sec-Ch-Ua-Full-Version-List': `Not A(Brand";v="99.0.0.0", "Google Chrome";v="121.0.6167.184", "Chromium";v="121.0.6167.184`,
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Model': '',
    'Sec-Ch-Ua-Platform': 'Linux',
    'Sec-Ch-Ua-Platform-Version': '6.5.0',
    'Sec-Ch-Ua-Wow64': '?0',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'Viewport-Width': '699',
}