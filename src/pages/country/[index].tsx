import {useRouter} from 'next/router'

function DetailPage() {
    const router = useRouter();
    const {index} = router.query;
  
    console.log(index);


    return<h1>detail</h1>
}

export default DetailPage;