import { base_url } from "./base_url";

//Authentication Related Apis

export async function login_user(email,password){
    let formData = new FormData()
    formData.append('email',email)
    formData.append('password',password)
    const response =await fetch(`${base_url}/apis/main/user/login`,{
        method:'POST',
        body:formData
    })
    return response.json()
}

export async function register_user(email,password,name,profile_picture){
    let formData = new FormData()
    formData.append('email',email)
    formData.append('password',password)
    formData.append('name',name)
   
    const response =await fetch(`${base_url}/apis/main/user/register`,{
        method:'POST',
        body:formData
    })
    return response.json()
}

//Admin Panel Related Apis Start
export async function login_to_panel(email,password){
let formData = new FormData()
formData.append('email',email)
formData.append('password',password)

const response =await fetch(`${base_url}/apis/panel/login`,{
    method:'POST',
    body:formData
})
return response.json()

} 
export async function get_admin_details(admin_id){
    const response = await fetch(`${base_url}/apis/admin/get_admin_details?user_id=${admin_id}`,{
        method:'GET'
    })
    return response.json()
}

export async function update_admin_details(admin_id,email,password,name){
    let formData = new FormData()
    formData.append('email',email)
    formData.append('password',password)
    formData.append('user_id',admin_id)
    formData.append('name',name)
    const response = await fetch(`${base_url}/apis/admin/update_admin_account`,{
        method:'POST',
        body:formData
    })
    return response.json()
}


export async function add_teacher(data){
    console.log(data)
    let formData = new FormData()
    formData.append('email',data.email)
    formData.append('password',data.password)
    formData.append('name',data.name)
    formData.append('title',data.title)
    formData.append('phone',data.phone)
    formData.append('description',data.description)
    formData.append('address',data.address)
    formData.append('is_admin',0)
    formData.append('is_teacher',1)
    formData.append('profile_picture',data.profile_picture)
    const response = await fetch(`${base_url}/apis/admin/add`,{
            method:'POST',
            body:formData
    })
    return response.json()


}

export async function get_all_teachers(){
    const response = await fetch(`${base_url}/apis/admin/get_all_teachers`,{
            method:'GET'
        })
        return response.json()
}


export async function admin_get_teacher_courses(teacher_id){
    const response = await fetch(`${base_url}/apis/admin/get_teacher_courses?teacher_id=${teacher_id}`,{
            method:'GET'
        })
        return response.json()
}


export async function delete_panel_user(user_id){
    const response = await fetch(`${base_url}/apis/admin/delete_panel_user?user_id=${user_id}`,{
            method:'DELETE'
        })
    return response.json()
}


export async function get_all_users(){
    const response = await fetch(`${base_url}/apis/admin/get_all_users`,{
            method:'GET'
        })
        return response.json()
}


export async function delete_user(user_id){
    const response = await fetch(`${base_url}/apis/admin/users/delete_user?user_id=${user_id}`,{
            method:'DELETE'
    })
    return response.json()

}


export async function get_all_featured_courses(){
    const response = await fetch(`${base_url}/apis/admin/featured_courses/get_featured_courses`,{
            method:'GET'
        })
        return response.json()
}


export async function get_courses_for_dropdown(){
    const response = await fetch(`${base_url}/apis/admin/featured_courses/get_courses_for_dropdown`,{
            method:'GET'
        })
        return response.json()

}

export async function delete_featured_course(course_id){
    const response = await fetch(`${base_url}/apis/admin/featured_courses/delete_featured_course?featured_id=${course_id}`,{
            method:'DELETE'
        })
    return response.json()
}


export async function add_featured_course(course_id){
    let formData = new FormData()
    formData.append('course_id', course_id)

    const response = await fetch(`${base_url}/apis/admin/featured_courses/add_featured_course`,{
            method:'POST',
            body:formData
        })
    return response.json()
}

export async function get_all_applications(){
    const response = await fetch(`${base_url}/apis/admin/teaching_applications/get_teaching_applications`,{
        method:'GET'
    })
    return response.json()
}

export async function accept_or_reject_application(application_id){
const response = await fetch(`${base_url}/apis/admin/teaching_applications/accept_or_reject_application`,{
    method:'DELETE'
})
return response.json()
}

export async function add_coupon(coupon_code,discount_percentage,course_id){
let formData = new FormData();
formData.append('coupon_code',coupon_code)
formData.append('discount_percentage',discount_percentage)
formData.append('course_id',course_id)
const response = await fetch(`${base_url}/apis/admin/coupons/add_coupon`,{
    method:'POST',
    body:formData
})
return response
}


export async function delete_coupon(coupon_id){
    const response = await fetch(`${base_url}/apis/admin/coupons/delete_coupon?coupon_id=${coupon_id}`,{
        method:'DELETE'
    })
    return response.json()
}

export async function get_all_coupons(){
    const response = await fetch(`${base_url}/apis/admin/coupons/get_all_coupons`,{
        method:'GET'
    })
    return response.json()
}



//Admin Panel Related Apis End



//Teacher Panel Related Apis Start

export async function add_course(title,description,teacher_id,course_thumbnail,course_price,course_category){
    console.log("Course Thumbnails")
    console.log(course_thumbnail)

    let formData = new FormData()
    formData.append('course_title',title)
    formData.append('course_description',description)
    formData.append('teacher_id',teacher_id)
    formData.append('course_thumbnail',course_thumbnail)
    formData.append('course_price',course_price)
    formData.append('course_category',course_category)
    const response = await fetch(`${base_url}/apis/teacher/courses/add_course`,{
        method:'POST',
        body:formData
    })
    return response.json()
}


export  async function get_teacher_courses(teacher_id){
    const response = await fetch(`${base_url}/apis/teacher/courses/get_teacher_courses?teacher_id=${teacher_id}`,{
        method:'GET'
    })
    return response.json()
}


export async function delete_course(course_id){
    const response = await fetch(`${base_url}/apis/teacher/courses/delete_course?course_id=${course_id}`,{
        method:'DELETE'
    })
    return response.json()
}


export async function view_course(course_id){
    const response = await fetch(`${base_url}/apis/teacher/courses/view_course?course_id=${course_id}`,{
        method:'GET'
    })
    return response.json()
}


export async function update_course(title,description,course_thumbnail,course_price,course_category,course_id){
    console.log('course id')
    console.log(course_id)
    let formData = new FormData()
    formData.append('course_title',title)
    formData.append('course_description',description)
    
    formData.append('course_thumbnail',course_thumbnail)
    formData.append('course_price',course_price)
    formData.append('course_category',course_category)
    formData.append('course_id',course_id)
    const response = await fetch(`${base_url}/apis/teacher/courses/update_course`,{
        method:'POST',
        body:formData
    })
    return response.json()
}


export async function get_teacher_details(teacher_id){
    const response = await fetch(`${base_url}/apis/teacher/account/get_teacher_details?user_id=${teacher_id}`,{
        method:'GET'
    })
    return response.json()
}

export async function update_teacher_account(teacher_id,email,password,title,description,name){
let formData = new FormData()
formData.append('email',email)
formData.append('password',password)
formData.append('user_id',teacher_id)
formData.append('title',title)
formData.append('description',description)
formData.append('name',name)


const response = await fetch(`${base_url}/apis/teacher/account/update_teacher_account`,{
    method:'POST',
    body:formData
})

return response.json()
}




export async function add_lecture(course_id,lecture_title,lecture_description,lecture_duration,lecture_number,lecture_video,lecture_type){
    console.log("lecture video")
    console.log(lecture_video)
    let formData = new FormData()
    formData.append('course_id',course_id)
    formData.append('lecture_title',lecture_title)
    formData.append('lecture_description',lecture_description)
    formData.append('lecture_duration',lecture_duration)
    formData.append('lecture_number',lecture_number)
    formData.append('lecture_video',lecture_video)
    formData.append('lecture_type',lecture_type)


    const response = await fetch(`${base_url}/apis/teacher/lectures/add_lecture`,{
        method:'POST',
        body:formData
    })
    return response.json()
}


export async function get_lectures(course_id){
    const response = await fetch(`${base_url}/apis/teacher/lectures/get_lectures?course_id=${course_id}`,{
        method:'GET'
    })
    return response.json()
    
}


export async function delete_lecture(lecture_id){
    const response = await fetch(`${base_url}/apis/teacher/lectures/delete_lecture?lecture_id=${lecture_id}`,{
        method:'DELETE'
    })
    return response.json()
    
}
//Teacher Panel Related Apis End



//Main Website Related Apis Start


export async function get_main_website_featured_course(){
    const response = await fetch(`${base_url}/apis/main/featured_courses/get_all_featured_courses`)
    return response.json()
}


export async function get_main_website_all_course(){
    const response = await fetch(`${base_url}/apis/main/courses/get_all_courses`)
    return response.json()
}

export async function get_main_website_view_course(course_id,is_loggedin,user_id){
    const response = await fetch(`${base_url}/apis/main/courses/view_course?course_id=${course_id}&&is_loggedin=${is_loggedin}&user_id=${user_id}`)
    return response.json()
}

export async function get_main_website_all_teachers(){
    const response = await fetch(`${base_url}/apis/main/teachers/get_all_teachers`)
    return response.json()
}

export async function get_main_website_four_teachers(){
    const response = await fetch(`${base_url}/apis/main/teachers/get_four_teachers`)
    return response.json()
}

export async function get_main_website_teacher_details(teacher_id){
    const response = await fetch(`${base_url}/apis/main/teachers/get_teacher_details?teacher_id=${teacher_id}`)
    return response.json()
}

export async function find_coupon(course_id,coupon_code){
    const response = await fetch(`${base_url}/apis/main/coupons/find_coupon?coupon_code=${coupon_code}&&course_id=${course_id}`)
    return response.json()
}

export async function buy_course(course_id,user_id){
    let formData = new FormData()
    formData.append('course_id',course_id)
    formData.append('user_id',user_id)
    const response = await fetch(`${base_url}/apis/main/courses/buy_course`,{
        body: formData,
        method:'POST'
    })
    return response.json()
}


export  async function get_owned_courses(user_id){
    const response = await fetch(`${base_url}/apis/main/courses/get_owned_courses?user_id=${user_id}`)
    return response.json()
}


export  async function get_user_details(user_id){
    const response = await fetch(`${base_url}/apis/main/user/get_user_details?user_id=${user_id}`)
        return response.json()
}
export async function update_user_details(user_id,name,email,address,phone_no,stripe_id){
    let formData = new FormData()
        formData.append('user_id',user_id)
        formData.append('name',name)
        formData.append('email',email)
        formData.append('address',address)
        formData.append('phone_no',phone_no)
        formData.append('stripe_id',stripe_id)
        const response = await fetch(`${base_url}/apis/main/user/update_user_details`,{
            body: formData,
            method:'POST'
        })
        return response.json()
}

export async function change_password(user_id,old_password,new_password){
    let formData = new FormData()
    formData.append('user_id',user_id)
    formData.append('old_password',old_password)
    formData.append('new_password',new_password)
    const response = await fetch(`${base_url}/apis/main/user/change_password`,{
        body: formData,
        method:'POST'
    })
    return response.json()
}

export async function send_application(email,resume){
    let formData = new FormData()
    formData.append('email',email)
    formData.append('resume',resume)
    const response = await fetch(`${base_url}/apis/main/teachers/send_application`,{
        body: formData,
        method:'POST'
    })
    return response.json()
}


export async function add_link(link,course_id,user_id,code){
    let formData = new FormData()
    formData.append('link',link)
    formData.append('course_id',course_id)

    formData.append("code",code)
    formData.append('user_id',user_id)

    const response = await fetch(`${base_url}/apis/main/courses/add_link`,{
        body: formData,
        method:'POST'
    })
    return response.json()

}


export async function get_links(user_id){
    const response = await fetch(`${base_url}/apis/main/courses/get_all_links?user_id=${user_id}`,{
        method:'GET'
    })
    return response.json()
}

export async function delete_link(link_id){
    const response = await fetch(`${base_url}/apis/main/courses/delete_link?link_id=${link_id}`,{
        method:'DELETE'
    })
    return response.json()
}

export async function get_course_by_link_code(code,is_loggedin,user_id){
    const response = await fetch(`${base_url}/apis/main/courses/get_course_by_link_code?code='${code}'&&is_loggedin=${is_loggedin}&&user_id=${user_id}`)
    return response.json()
}
//Main Website Related Apis End



