<template>
   
</template>

<script setup>
// import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
// import helperUtil from '@/utils/helpers/helper.js';
// import coreVocabularySvg from '@/assets/images/coreVocabulary.svg';
// import { storeToRefs } from 'pinia';
// import { useReviewdbStore } from '@/stores/Reviewdatabase.js';
// import { useRouter } from 'vue-router';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

// const router = useRouter();

// const store = useReviewdbStore();
// const { selectedWord } = storeToRefs(store); // 搜尋條件、標題

// // 退回字條
// import RejectComponent from '@/components/database/RejectComponent.vue';
// const rejectDialog = ref(false);
// const fromDetail = ref(true);
// const RejectView = (reject) => {
//     const passWord = JSON.parse(localStorage.getItem('reviewword'));
//     selectedWord.value = [passWord];
//     rejectDialog.value = true;
// };

// // 通過字條
// import PassComponent from '@/components/database/PassComponent.vue';
// const passDialog = ref(false);
// const passTitle = ref(null);
// const passView = () => {
//     const passWord = JSON.parse(localStorage.getItem('reviewword'));
//     passTitle.value = '通過';
//     selectedWord.value = [passWord];
//     passDialog.value = true;
// };

// const goToPrev = () => {
//     router.go(-1);
// }

// // expend panels
// const expansion = ref([]);
// const expansionSave = ref([]);
// const togglePanels = () => {
//     if(expansion.value.length !== 0){
//         expansion.value = []
//     }else{
//         !!wordData.value.editDefinitions.length && (expansion.value = wordData.value.editDefinitions.map((item, index) => index));
//     }
// }

// const combineSynonyms = (item) => {
//     if (Array.isArray(item)) {
//         const wordsArray = item.map(i => i.wordText); 
//         const combinedString = wordsArray.join(', '); 
//         return combinedString;
//     } else {
//         const combinedString = item
//         return combinedString
//     }
// };


// // 取得字詞資料
// const wordData = ref(null);
// const word = ref('');
// onMounted(() => {
//     const wordTextInfo = localStorage.getItem('wordTextInfo');
//     if (wordTextInfo !== 'undefined') {
//         wordData.value = JSON.parse(wordTextInfo);
//         word.value = wordData.value.wordText;

//         // 儲存字詞(筆順動畫使用)
//         const wordList = [];
//         if(word.value){
//             for (let i = 0; i < word.value.length; i++) {
//                 const wordText = word.value[i];
//                 wordList.push(wordText);
//             };
//             localStorage.setItem('wordList', JSON.stringify(wordList));
//         }
        
//         // 處理音檔跟圖檔的路徑
//         const definitions = wordData.value.editDefinitions;
        
//         // 取得目前瀏覽器的地址
//         const currentUrl = window.location.href;
//         let url;
        
//         if (currentUrl.includes('http://localhost') || currentUrl.includes('https://devcieestage')) {
//             url = 'https://devcieestage.gogotest.xyz/media/words/';
//         } else if (currentUrl.includes('https://cieestage')) {
//             url = 'https://cieestage.gogotest.xyz/media/words/';
//         } else if (currentUrl.includes('https://dlearnmbo.naer.edu.tw/')) {
//             url = 'https://dlearnmbo.naer.edu.tw/media/words/'
//         }

//         for(let i = 0; i < definitions.length; i++) {
//             if (definitions[i].voiceFiles.length) {
//                 definitions[i].voiceFiles[0].filePath = url + 'audio/' + definitions[i].voiceFiles[0].realFileName;
//             }
//             if (definitions[i].imageFiles.length) {
//                 for(let j = 0; j < definitions[i].imageFiles.length; j++){
//                     definitions[i].imageFiles[j].filePath =  url + 'image/' + definitions[i].imageFiles[j].realFileName;
//                 }
//             }
//             if(definitions[i].exampleSentence){
//                 definitions[i].exampleSentence = definitions[i].exampleSentence.replace(/\r\n/g, '<br>');
//                 definitions[i].exampleSentence = definitions[i].exampleSentence.replace(/\n/g, '<br>');
//             }
//         };

//         // 例句出現該字詞要 highlight
//         for (let i = 0; i < definitions.length; i++) {
//             const exampleSentence = definitions[i].exampleSentence;
//             const collocation = definitions[i].collocation;
//             const wordToHighlight = word.value;

//             // 比對 exampleSentence
//             if (typeof exampleSentence === 'string') {
//                 const regexExample = new RegExp(wordToHighlight, 'g');
//                 definitions[i].exampleSentence = exampleSentence.replace(regexExample, match => `<span class="matchText">${match}</span>`);
//             }

//             // 比對 collocation
//             if (typeof collocation === 'string') {
//                 const regexCollocation = new RegExp(wordToHighlight, 'g');
//                 definitions[i].collocation = collocation.replace(regexCollocation, match => `<span class="matchText">${match}</span>`);
//             }
//         }
//     }
// });

// // 播放
// const showPlay = ref(true);
// const pausedTime = ref(0);
// const lastAudio = ref(null);
// const playSound = (sound) => {
//     pauseSound();

//     const audio = new Audio(sound);
//     lastAudio.value = audio;

//     // 设置音频的初始时间
//     audio.currentTime = pausedTime.value;

//     // 添加 ended 事件监听器
//     audio.addEventListener('ended', () => {
//         showPlay.value = true;
//         pausedTime.value = 0; // 播放结束后重置暂停时间
//     });

//     audio.play();
//     showPlay.value = false;
// };

// const pauseSound = () => {
//     if (lastAudio.value && !lastAudio.value.paused) {
//         lastAudio.value.pause();
//         showPlay.value = true;

//         // 记录暂停时的时间
//         pausedTime.value = lastAudio.value.currentTime;
//     }
// };

// onBeforeUnmount(() => {
//     pauseSound();
// });

// const replaySound = (sound) => {
//     stopAndResetSound();
//     playSound(sound);
// };

// const stopAndResetSound = () => {
//     if (!lastAudio.value) return;
//     // 移除 ended 事件监听器
//     lastAudio.value.removeEventListener('ended', () => {
//         showPlay.value = true;
//         pausedTime.value = 0;
//     });

//     // 停止并重置音频
//     lastAudio.value.pause();
//     lastAudio.value.currentTime = 0;
//     lastAudio.value = null;
//     showPlay.value = true;
//     pausedTime.value = 0;
// }

// // 是否顯示審核按鈕
// const showBtn = computed(() => {
//     return localStorage.getItem('path') === 'review';
// });

// // 來源動作文字對應
// const actionStyle = ref('');
// const sourceAction = computed(() => {
//     const action = localStorage.getItem('sourceAction');
//     actionStyle.value = helperUtil.reviewdbEditActionStyle(action); // 來源動作顏色套用
//     return helperUtil.reviewdbActionText(action);
// });

// // 倒轉到筆畫順序動畫頁
// const showAnimation = (item) => {
//     const word = JSON.stringify({
//         word: item
//     });

//     // 獲取目標路由的 URL
//     const { href } = router.resolve({
//         name: 'StrokeAnimation',
//         params: { word }
//     });

//     // 打開新的窗口
//     window.open(href, '_blank');
// }

// const copyLink = () => {
//     const wordTextInfo = JSON.parse(localStorage.getItem('wordTextInfo'));
//     let url;
    
//     // 取得目前瀏覽器的地址
//     const currentUrl = window.location.href;
    
//     if (currentUrl.includes('http://localhost') || currentUrl.includes('https://devcieestage')) {
//         url = 'https://devcieestage.gogotest.xyz//resultView/';
//     } else if (currentUrl.includes('https://cieestage')) {
//         url = 'https://cieestage.gogotest.xyz//resultView/';
//     }else if(currentUrl.includes('https://dlearnmbo.naer.edu.tw')){
//         url = 'https://dlearnmbo.naer.edu.tw/resultView/'
//     }
    
//     url += wordTextInfo.wordId;
    
//     // 建立一個臨時的 textarea 元素來複製文字到剪貼簿
//     const tempTextarea = document.createElement('textarea');
//     tempTextarea.value = url;
//     document.body.appendChild(tempTextarea);
//     tempTextarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(tempTextarea);
    
//     // 提示用戶已複製
//     Swal.fire({
//         toast: true,
//         position: 'center',
//         icon: 'success',
//         title: `已成功複製字詞前台網址`,
//         confirmButtonColor: '#0E2A34',
//         confirmButtonText: '確認',
//         background: '#F0F0F2',
//         width: 400
//     });
// }

// // 轉換等級
// const levelLabel = (val) => {
//     switch (val) {
//         case 1:
//             return '1';
//         case 2:
//             return '1*';
//         case 3:
//             return '2';
//         case 4:
//             return '2*';
//         case 5:
//             return '3';
//         case 6:
//             return '3*';
//         case 7:
//             return '4';
//         case 8:
//             return '4*';
//         case 9:
//             return '5';
//         case 10:
//             return '6';
//         case 11:
//             return '7';
//         default:
//             return '';
//     }
// }

</script>

<style lang="scss" scoped>

</style>
