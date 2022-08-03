import Image from "next/image"
import HeaderItem from "./HeaderItem";
import { HomeIcon, 
    UserIcon,
     LightningBoltIcon, 
     SearchIcon, 
     CollectionIcon,
     BadgeCheckIcon 
     } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow max-w-2xl">
                 <HeaderItem title='HOME' Icon={HomeIcon}  />
                 <HeaderItem title='ACCOUNT' Icon={UserIcon}  />
                 <HeaderItem title='TREADING' Icon={LightningBoltIcon}  />
                 <HeaderItem title='SEARCH' Icon={SearchIcon}  />
                 <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}  />
                 <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}  />
            </div>
              <Image className="object-contain"
               src='https://links.papareact.com/ua6' 
               width={200} 
               height={100} 
               />
        </header>
     
    ) 
}

export default Header
