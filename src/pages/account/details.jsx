import UserDashboardLayout from "../../components/account/UserDashboardLayout";
import TitleWithSummary from "../../components/account/TitleWithSummary";
import React, { useState } from "react";
import { useAuth } from "src/hooks/useAuth";
import axios from 'axios'

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { deformatPhoneNumber, formatPhoneNumber } from "src/helper/helper";


// ** Config
import authConfig from "src/configs/auth";
import myDetailsConfig from "src/configs/myDetails";
import OtpDialog from "src/components/account/OtpDialog";
import { useEffect } from "react";
import AlertDialog from "src/components/AlertDialog";
import LoadingSpinnerWithText from "src/components/LoadingSpinnerWithText";
//seo
import { AccountSeo } from "../../seo/seo";

export default function Details() {
  const [saveLoading, setSaveLoading] = useState(false)
  const [isVerfiedAll, setIsVerfiedAll] = useState({
    mobileNo: false,
    email: false
  })
  const [verifyMobileLoading, setMobileVerifyLoading] = useState(false)
  const [verifyEmailLoading, setEmailVerifyLoading] = useState(false)
  const [isVerify, setIsFromVerify] = useState(false)
  const [verifyType, setVerifyType] = useState('');
  const auth = useAuth();
  const [userData, setUserData] = useState(auth.user);


  useEffect(() => {
    setValue('mobileNo', formatPhoneNumber(auth?.user?.mobileNo))
    setUserData(auth.user)
    setEditable(false)
    return () => {
      null;
    }
  }, [auth])


  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    gender: yup.string().required("Gender is a required field"),
    dob: yup.string().required("DOB is a required field"),
    email: yup.string().email().required("Email is a required field"),
    mobileNo: yup.string().required("Mobile number is a required field"),
  });

  const defaultValues = {
    name: userData?.name,
    gender: (userData?.gender ? (userData.gender) : ('Female')),
    dob: userData?.dob,
    email: userData?.email,
    // mobileNo: userData?.mobileNo,
  }

  const {
    watch,
    register,
    reset,
    control,
    setValue,
    getValues,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const values = getValues();

  const onSaveClicked = (data) => {
    setSaveLoading(true)
    setFormData(data);
    const headers = {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
    }
    const storedToken =
      "Bearer " + window.localStorage.getItem(authConfig.storageTokenKeyName);
    try {
      axios.post(myDetailsConfig.resendOtpUsingIdEndpoint, {}, {
        headers: {
          Authorization: storedToken,
        },
      })
        .then(async (res) => {
          setSaveLoading(false)
          setOtpDialogOpen(true)
        })
    } catch (e) {
      setSaveLoading(false)
    }
  }

  const onVerifyClicked = (type) => {
    console.log('func is called');
    setVerifyType(type);
    let sendLinkkTo = '';
    if (type === 'email') {
      sendLinkkTo = values?.email;
      setEmailVerifyLoading(true);
    } else if (type === 'mobileNo') {
      sendLinkkTo = values?.mobileNo;
      setMobileVerifyLoading(true);
    }

    const headers = {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
    }
    // const [sendLinkkTo, setSendLinkTo] = useState((userData.email ? userData.email : (userData.mobileNo ? userData.mobileNo : '')));
    const storedToken =
      "Bearer " + window.localStorage.getItem(authConfig.storageTokenKeyName);
    try {
      axios.post(myDetailsConfig.resendOtpUsingIdEndpoint, { id: sendLinkkTo }, {
        headers: {
          Authorization: storedToken,
        },
      })
        .then(async (res) => {
          setOtpDialogOpen(true);
          setIsFromVerify(true);
          if (type === 'email') {
            setEmailVerifyLoading(false);
          } else if (type === 'mobileNo') {
            setMobileVerifyLoading(false);
          }

        })
    } catch (e) {
      setIsFromVerify(false);
      if (type === 'email') {
        setEmailVerifyLoading(false);
      } else if (type === 'mobileNo') {
        setMobileVerifyLoading(false);
      }
    }
  }

  const [formData, setFormData] = useState(null);




  const [openAlert, setOpenAlert] = useState(false)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('confirm')
  const [msg, setMsg] = useState('')


  const verifyEmailOtp = (otp) => {
    const headers = {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
    }
    // const [sendLinkkTo, setSendLinkTo] = useState((userData.email ? userData.email : (userData.mobileNo ? userData.mobileNo : '')));
    const storedToken =
      "Bearer " + window.localStorage.getItem(authConfig.storageTokenKeyName);
    try {
      if (verifyType === 'mobileNo') {
        var deformatmobileNo = deformatPhoneNumber(values.mobileNo)
      }
      axios.post(myDetailsConfig.updateEmailOtpVerify, { otp, [verifyType]: verifyType === 'email' ? values.email : deformatmobileNo }, {
        headers: {
          Authorization: storedToken,
        },
      })
        .then(async (res) => {
          setOpenAlert(true)
          setOtpDialogOpen(false)
          setType('success')
          setTitle('Success')
          setMsg('Details updated sucessfully!')
          setIsFromVerify(false);
          setVerifyType('');
          const dummyData = { ...isVerfiedAll };
          if (verifyType === 'email') {
            dummyData.email = true
          } else if (verifyType === 'mobileNo') {
            dummyData.mobileNo = true
          }
          setIsVerfiedAll({ ...dummyData });
        })
    } catch (e) {
      setVerifyType('');
      setIsFromVerify(false);
      setOpenAlert(true)
      setOtpDialogOpen(false)
      setType('error')
      setTitle('Error')
      setMsg(res?.response?.data?.message)
      const dummyData = { ...isVerfiedAll };
      if (verifyType === 'email') {
        dummyData.email = true
      } else if (verifyType === 'mobileNo') {
        dummyData.mobileNo = true
      }
      setIsVerfiedAll({ ...dummyData });
    }
  }

  const continueEditing = (otp) => {
    const { dob = '', mobileNo, ...rest } = formData;
    // convert YYYY-MM-DD to DD/MM/YYYY
    const dobArr = '';
    const dobStr = '';
    if (dob.includes('-')) {
      dobArr = dob.split('-');
      dobStr = dobArr[1] + '/' + dobArr[2] + '/' + dobArr[0];
    } else {
      dobArr = dob.split('/')
      dobStr = dobArr[0] + '/' + dobArr[1] + '/' + dobArr[2];
    }
    const deformatmobileNo = deformatPhoneNumber(mobileNo)
    // const data = { otp, dob: dobStr, mobileNo: deformatmobileNo, ...rest }
    const data = { otp, dob: dobStr, mobileNo: deformatmobileNo, ...rest }


    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
    }
    try {
      const response = axios.post(myDetailsConfig.updateUserEndpoint, { ...data }, { headers })
        .then(async res => {
          // return response
          setOpenAlert(true)
          setType('success')
          setTitle('Success')
          setMsg('Details updated sucessfully!')
          auth.refreshAuth()

        })
        .catch(async res => {
          setOpenAlert(true)
          setType('error')
          setTitle('Error')
          setMsg(res?.response?.data?.message)
        })





    } catch (e) {
      setOpenAlert(true)
      setType('error')
      setTitle('Error')
      setMsg(e?.response?.data)
      if (e?.response?.status == 409) {
        // returnResponse = { 'status': 'failed', 'message': (e?.response?.data?.message) }
      }
    }
    setOtpDialogOpen(false)
  }


  const closeDialog = () => {
    if (type == 'success') {
      reset()
    }
    setOpenAlert(false)
  }





  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  return (
    <>
      <AccountSeo />
      <AlertDialog
        isOpen={openAlert}
        onClose={closeDialog}
        type={type}
        title={title}
        content={msg}
      />
      <TitleWithSummary
        title="Account Details"
        summary="change your account details."
      />
      <div className="rounded-xl border bg-white p-5 md:mt-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="label">
              Full Name
            </label>

            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <input
                  disabled={!editable || saveLoading}
                  value={value}
                  onChange={onChange}
                  id="name"
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                />
              )}
            />


            {errors.name && (
              <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="gender" className="label">
              Gender
            </label>

            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <select disabled={!editable || saveLoading} value={value} onChange={onChange} id="gender" className="input">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              )}
            />


            {errors.gender && (
              <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                {errors.gender.message}
              </p>
            )}


          </div>
          <div>
            <label htmlFor="dob" className="label">
              Date of Birth
            </label>

            <Controller
              name="dob"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                // <input disabled={!editable} value={value.includes('/') ? value.replace(/(..).(..).(....)/, "$3-$1-$2") : value} onChange={onChange} id="dob" type="date" className="input" />
                <input
                  disabled={!editable || saveLoading}
                  value={value ? (value.includes('/') ? value.replace(/(..).(..).(....)/, "$3-$1-$2") : value) : ''}
                  // value={value}
                  onChange={onChange}
                  id="dob"
                  type="date"
                  className="input" />
              )}
            />
            {errors.dob && (
              <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                {errors.dob.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email ID
            </label>

            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <input
                  disabled={!editable || saveLoading}
                  value={value}
                  onChange={onChange}
                  id="email"
                  type="email"
                  className="input"
                  placeholder="Enter your email address"
                />
              )}
            />
            {editable && !isVerfiedAll?.email && <button
              disabled={!values?.email || verifyEmailLoading || errors.email}
              onClick={() => onVerifyClicked('email')}
              className={`min-w-[90px] rounded-md mt-2 ${verifyEmailLoading ? 'bg-gray-200' : 'bg-green-500 text-white'} py-1 px-2 font-medium  ${!verifyEmailLoading && 'hover:bg-green-600'}`}>
              {
                verifyEmailLoading ? (
                  <LoadingSpinnerWithText text={'Verify Email / Phone'} position={'center'} />
                ) : 'Verify Email'
              }

            </button>}
            {errors.email && (
              <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="mobile" className="label">
              Mobile Number
            </label>


            <Controller
              name="mobileNo"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <input
                  disabled={!editable || saveLoading}
                  value={value}

                  onChange={(e) => {
                    clearErrors('mobileNo');
                    onChange(formatPhoneNumber(e.target.value))
                  }}

                  id="mobile"
                  type="text"
                  placeholder="Enter your mobile number"
                  className="input"
                />
              )}
            />
            {editable && !isVerfiedAll?.mobileNo && <button
              disabled={!values?.mobileNo || verifyMobileLoading || errors.mobileNo}
              onClick={() => onVerifyClicked('mobileNo')}
              className={`min-w-[90px] rounded-md mt-2 ${verifyMobileLoading ? 'bg-gray-200' : 'bg-green-500 text-white'} py-1 px-2 font-medium  ${!verifyMobileLoading && 'hover:bg-green-600'}`}>
              {
                verifyMobileLoading ? (
                  <LoadingSpinnerWithText text={'Verify Phone'} position={'center'} />
                ) : 'Verify Phone'
              }

            </button>}
            {errors.mobileNo && (
              <p style={{ marginTop: 0 }} className="text-sm text-red-500">
                {errors.mobileNo.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {editable ? (
            <>
              <button
                disabled={saveLoading}
                onClick={handleSubmit(onSaveClicked)}
                className={`min-w-[90px] rounded-md ${saveLoading ? 'bg-gray-200' : 'bg-green-500 text-white'} py-2 px-4 font-medium  ${!saveLoading && 'hover:bg-green-600'}`}>
                {
                  saveLoading ? (
                    <LoadingSpinnerWithText text={'Save'} position={'center'} />
                  ) : 'Save'
                }

              </button>

              <button
                disabled={saveLoading}
                onClick={() => setEditable(false)}
                className={`min-w-[90px] rounded-md bg-gray-200 py-2 px-4 font-medium ${!saveLoading && 'hover:bg-gray-300'} `}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setEditable(true)} className="min-w-[90px] rounded-md bg-primary py-2 px-4 font-medium text-white hover:bg-primary/90">
                Edit
              </button>
            </>
          )}
        </div>
      </div>
      {otpDialogOpen && (
        <OtpDialog isOpen={otpDialogOpen} onClose={() => setOtpDialogOpen(false)} to={""} from={'details'} continueEditing={isVerify ? verifyEmailOtp : continueEditing} formData={formData} />
      )}
    </>
  );
}

Details.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
