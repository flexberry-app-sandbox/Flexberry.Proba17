﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч рег результ.
    /// </summary>
    // *** Start programmer edit section *** (ТЧРегРезульт CustomAttributes)

    // *** End programmer edit section *** (ТЧРегРезульт CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч рег результ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧРегРезультE", new string[] {
            "ИтогСобесед as \'Итог собесед\'",
            "ОценкаКандид as \'Оценка кандид\'",
            "КрКомИлиОбсРеш as \'Кр ком или обс реш\'",
            "Сотруд as \'Сотруд\'"})]
    [MasterViewDefineAttribute("ТЧРегРезультE", "Сотруд", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    public class ТЧРегРезульт : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Proba1.ИтогСобесед fИтогСобесед;
        
        private int fОценкаКандид;
        
        private string fКрКомИлиОбсРеш;
        
        private IIS.Proba1.Сотруд fСотруд;
        
        private IIS.Proba1.РегРезульт fРегРезульт;
        
        // *** Start programmer edit section *** (ТЧРегРезульт CustomMembers)

        // *** End programmer edit section *** (ТЧРегРезульт CustomMembers)

        
        /// <summary>
        /// ИтогСобесед.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегРезульт.ИтогСобесед CustomAttributes)

        // *** End programmer edit section *** (ТЧРегРезульт.ИтогСобесед CustomAttributes)
        public virtual IIS.Proba1.ИтогСобесед ИтогСобесед
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.ИтогСобесед Get start)

                // *** End programmer edit section *** (ТЧРегРезульт.ИтогСобесед Get start)
                IIS.Proba1.ИтогСобесед result = this.fИтогСобесед;
                // *** Start programmer edit section *** (ТЧРегРезульт.ИтогСобесед Get end)

                // *** End programmer edit section *** (ТЧРегРезульт.ИтогСобесед Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.ИтогСобесед Set start)

                // *** End programmer edit section *** (ТЧРегРезульт.ИтогСобесед Set start)
                this.fИтогСобесед = value;
                // *** Start programmer edit section *** (ТЧРегРезульт.ИтогСобесед Set end)

                // *** End programmer edit section *** (ТЧРегРезульт.ИтогСобесед Set end)
            }
        }
        
        /// <summary>
        /// КрКомИлиОбсРеш.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш CustomAttributes)

        // *** End programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш CustomAttributes)
        [StrLen(255)]
        public virtual string КрКомИлиОбсРеш
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Get start)

                // *** End programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Get start)
                string result = this.fКрКомИлиОбсРеш;
                // *** Start programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Get end)

                // *** End programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Set start)

                // *** End programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Set start)
                this.fКрКомИлиОбсРеш = value;
                // *** Start programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Set end)

                // *** End programmer edit section *** (ТЧРегРезульт.КрКомИлиОбсРеш Set end)
            }
        }
        
        /// <summary>
        /// ОценкаКандид.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегРезульт.ОценкаКандид CustomAttributes)

        // *** End programmer edit section *** (ТЧРегРезульт.ОценкаКандид CustomAttributes)
        public virtual int ОценкаКандид
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.ОценкаКандид Get start)

                // *** End programmer edit section *** (ТЧРегРезульт.ОценкаКандид Get start)
                int result = this.fОценкаКандид;
                // *** Start programmer edit section *** (ТЧРегРезульт.ОценкаКандид Get end)

                // *** End programmer edit section *** (ТЧРегРезульт.ОценкаКандид Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.ОценкаКандид Set start)

                // *** End programmer edit section *** (ТЧРегРезульт.ОценкаКандид Set start)
                this.fОценкаКандид = value;
                // *** Start programmer edit section *** (ТЧРегРезульт.ОценкаКандид Set end)

                // *** End programmer edit section *** (ТЧРегРезульт.ОценкаКандид Set end)
            }
        }
        
        /// <summary>
        /// Т ч рег результ.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегРезульт.Сотруд CustomAttributes)

        // *** End programmer edit section *** (ТЧРегРезульт.Сотруд CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотруд"})]
        [NotNull()]
        public virtual IIS.Proba1.Сотруд Сотруд
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.Сотруд Get start)

                // *** End programmer edit section *** (ТЧРегРезульт.Сотруд Get start)
                IIS.Proba1.Сотруд result = this.fСотруд;
                // *** Start programmer edit section *** (ТЧРегРезульт.Сотруд Get end)

                // *** End programmer edit section *** (ТЧРегРезульт.Сотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.Сотруд Set start)

                // *** End programmer edit section *** (ТЧРегРезульт.Сотруд Set start)
                this.fСотруд = value;
                // *** Start programmer edit section *** (ТЧРегРезульт.Сотруд Set end)

                // *** End programmer edit section *** (ТЧРегРезульт.Сотруд Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proba1.РегРезульт.
        /// </summary>
        // *** Start programmer edit section *** (ТЧРегРезульт.РегРезульт CustomAttributes)

        // *** End programmer edit section *** (ТЧРегРезульт.РегРезульт CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РегРезульт"})]
        public virtual IIS.Proba1.РегРезульт РегРезульт
        {
            get
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.РегРезульт Get start)

                // *** End programmer edit section *** (ТЧРегРезульт.РегРезульт Get start)
                IIS.Proba1.РегРезульт result = this.fРегРезульт;
                // *** Start programmer edit section *** (ТЧРегРезульт.РегРезульт Get end)

                // *** End programmer edit section *** (ТЧРегРезульт.РегРезульт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧРегРезульт.РегРезульт Set start)

                // *** End programmer edit section *** (ТЧРегРезульт.РегРезульт Set start)
                this.fРегРезульт = value;
                // *** Start programmer edit section *** (ТЧРегРезульт.РегРезульт Set end)

                // *** End programmer edit section *** (ТЧРегРезульт.РегРезульт Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧРегРезультE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧРегРезультE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧРегРезультE", typeof(IIS.Proba1.ТЧРегРезульт));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧРегРезульт.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧРегРезульт CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧРегРезульт CustomAttributes)
    public class DetailArrayOfТЧРегРезульт : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proba1.DetailArrayOfТЧРегРезульт members)

        // *** End programmer edit section *** (IIS.Proba1.DetailArrayOfТЧРегРезульт members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧРегРезульт by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧРегРезульт.
        /// </summary>
        public DetailArrayOfТЧРегРезульт(IIS.Proba1.РегРезульт fРегРезульт) : 
                base(typeof(ТЧРегРезульт), ((ICSSoft.STORMNET.DataObject)(fРегРезульт)))
        {
        }
        
        public IIS.Proba1.ТЧРегРезульт this[int index]
        {
            get
            {
                return ((IIS.Proba1.ТЧРегРезульт)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proba1.ТЧРегРезульт dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
