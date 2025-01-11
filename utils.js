
function toggleEmojiDrawer() {
  let drawer = document.getElementById('drawer');

  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}

async function uploadImg(imgData, onSuccess) {
  const CLOUD_NAME = 'webify'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  const formData = new FormData()
  formData.append('file', imgData)
  formData.append('upload_preset', 'webify')
  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    console.log('Cloudinary response:', data)
    onSuccess(data.secure_url)

  } catch (err) {
    console.log(err)
  }
}
